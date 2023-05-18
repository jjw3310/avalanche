// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//ERR0000 8 To DEVELOPER
//ERR1000 8 To USER

contract DateData is ERC721Enumerable, Ownable {
    string private baseURI;
    uint public openedNftCnt;
    uint public mintedNftCnt;
    uint public seasonOpened;
    uint public maxMintInASeasonCnt; // default 10 in constructor
    address public adminAddress;
    
// seasonal minting part
    struct season {
        uint256 startDate;
        uint256 endDate;
        uint256 totalcnt;
        address[] owners; // [IMPORTANT] Don't change after mint even nfts are transfered.
    }

    mapping(string => uint) seasonNameToNum;
    season[] public seasonList;

// NFT part
    struct nftInfo {
        bool minted;
        string title;
        string contents;
        bool showDefaultImg;
        string imgUrl;
    }
    mapping(uint256 => nftInfo) nftInfoList; // tokenid => nftInfo

    constructor(string memory _name, string memory _symbol, string memory _baseUri, address _adminAddress)
    ERC721(_name, _symbol) {
        baseURI = _baseUri;
        openedNftCnt = 1;
        seasonOpened = 0; // Genesis Season
        _safeMint(msg.sender, 0); // Genesis Date NFT
        mintedNftCnt = 1;
        adminAddress = _adminAddress;
        maxMintInASeasonCnt = 10;
        seasonList.push(season(0,10100,10101,new address[](10101)));
    }

    function setBaseURI(string memory _baseUri) external {
        baseURI = _baseUri;
    }
    
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // function toggleDefaultImg(uint256 _yyyymmdd) internal returns(bool) {
    //     require(msg.sender == ownerOf(_yyyymmdd),"_ERR[1009]:Only owner can change this option");
    //     nftInfoList[_yyyymmdd].showDefaultImg = !nftInfoList[_yyyymmdd].showDefaultImg;
    //     return nftInfoList[_yyyymmdd].showDefaultImg;
    // }

    function setNftInfo(uint256 _yyyymmdd, string memory _title, string memory _contents, bool _showDefaultImg, string memory _imgUrl) public {
        require(msg.sender == ownerOf(_yyyymmdd),"_ERR[1009]:Only owner can change this option");
        nftInfoList[_yyyymmdd].title = _title;
        nftInfoList[_yyyymmdd].contents = _contents;
        nftInfoList[_yyyymmdd].showDefaultImg = _showDefaultImg;
        nftInfoList[_yyyymmdd].imgUrl = _imgUrl;
    }
    

    //open new season
    function openSeason(string memory _name, uint256 _startDate, uint256 _endDate, uint256 _totalcnt)
     public checkYYYYMMDD(_startDate) checkYYYYMMDD(_endDate) onlyOwner()
    {
        require(bytes(_name).length > 0, "_ERR[0001]:_name is necessary");
        require(_totalcnt > 0 && _totalcnt <= 366, "_ERR[0002]:_totalcnt between 1~366");
        require(_endDate >= _startDate, "_ERR[0003]:_stardDate can't be bigger than _endDate");

        seasonOpened++; // first season starts with 1, Genesis Season 0
        seasonNameToNum[_name] = seasonOpened;
        seasonList.push(season(_startDate, _endDate, _totalcnt, new address[](_totalcnt)));
        openedNftCnt = openedNftCnt + _totalcnt;
    }

    // common mint function
    // check input data(date availablity) before call this function!!!
    function mintCommon(uint256 _season, string memory _seasonName, uint256 _yyyymmdd, address _owner )
     public
    {
        // Double mint check
        // require(ownerOf(_yyyymmdd)==address(0),"_ERR[1008]:This date NFT is already minted");
        uint256 seasonNum;

        // Input value check
        if(_season > 0 && bytes(_seasonName).length > 0) {
            require(seasonNameToNum[_seasonName] == _season, "_ERR[0004]:Check _season or _seasonName");
        }
        if(_season > 0) {
            require(_season > 0 && _season <= seasonOpened, "_ERR[0005]:Check your _seanson value");
        } else if(bytes(_seasonName).length > 0 ) {
            require(seasonNameToNum[_seasonName] > 0, "_ERR[0006]:Check _seasonName value");
            seasonNum = seasonNameToNum[_seasonName];
        }

        // Max mint in a season check
        uint ownCnt;
        for(uint i=0; i < seasonList[seasonNum].owners.length; i++){
            if(seasonList[seasonNum].owners[i] == _owner) ownCnt++;
            require(ownCnt <= maxMintInASeasonCnt, "_ERR[1007]:Can't mint more than maxMintInASeasonCnt");
        }

        //totalcnt and minted count check [!!Check for Code Error!!]
        require(seasonList[seasonNum].totalcnt >= seasonList[seasonNum].owners.length,"_ERR[0007]:Owners length can't exceed totalcnt");
        require(openedNftCnt >= mintedNftCnt, "_ERR[0008]:Check openedNftCnt and mintedNftCnt");

        // mint
        nftInfoList[_yyyymmdd].minted = true;
        seasonList[seasonNum].owners.push(_owner);
        mintedNftCnt++;
        // _safeMint(_msgSender(), _yyyymmdd); // use _msgSender() to get user address in gas relayer
        _safeMint(msg.sender, _yyyymmdd); // use msg.sender in normal situation
    }

    function getDayNftInfo(uint256 _yyyymmdd) public view returns(nftInfo memory) {
        return nftInfoList[_yyyymmdd];
    }

    function getMonthNftInfo(uint256 _yyyymm) public view returns(nftInfo[] memory) {
        nftInfo[] memory arr = new nftInfo[](31);
        for(uint256 i=1; i < 32; i++){
            arr[i] = nftInfoList[_yyyymm*100+i];
        }
        return arr;
    }

    // mint date NFT with tokenID _yyyymmdd
    // function mintNFTNoOptions(uint256 _yyyymmdd)
    //  checkYYYYMMDD(_yyyymmdd) public onlyOwner() returns (uint256) {
    //     require(openedNftCnt > mintedNftCnt, "_ERR[1000]:All NFTs are sold out");
    //     require(_yyyymmdd > 0,"_ERR[1001]:Check your input value");
        
    //     mintedNftCnt++;
        
    //     _safeMint(_msgSender(), _yyyymmdd); // use _msgSender() to get user address in gas relayer
    //     // _safeMint(msg.sender, _yyyymmdd); // use msg.sender in normal situation
        
    //     return _yyyymmdd;
    // }


    // mint date NFT with date arrange && tokenID _yyyymmdd
    // function mintNFTDateArrange(uint256 _startDate, uint256 _endDate, uint256 _yyyymmdd)
    //  public checkYYYYMMDD(_yyyymmdd) onlyOwner() returns (uint256) {
    //     require(openedNftCnt > mintedNftCnt, "_ERR[1000]:All NFTs are sold out");
    //     require(_yyyymmdd >= _startDate,"_ERR[1002]:Can't mint date before start date");
    //     require(_yyyymmdd <= _endDate,"_ERR[1003]:Can't mint date after end date");
        
    //     mintedNftCnt++;
        
    //     _safeMint(_msgSender(), _yyyymmdd); // use _msgSender() to get user address in gas relayer
    //     // _safeMint(msg.sender, _yyyymmdd); // use msg.sender in normal situation
        
    //     return _yyyymmdd;
    // }

    // function mintNFTBySeasonNumber(uint256 _season, uint256 _yyyymmdd)
    //  public checkYYYYMMDD(_yyyymmdd) checkSeasonMintAvailable(_season, _yyyymmdd) onlyOwner() 
    // {
    //     require(_season > 0 && _season <= seasonOpened, "_ERR[0005]:Check your _seanson value");

    //     mintedNftCnt++;
        
    //     _safeMint(_msgSender(), _yyyymmdd); // use _msgSender() to get user address in gas relayer
    //     // _safeMint(msg.sender, _yyyymmdd); // use msg.sender in normal situation
        
    //     // return _yyyymmdd;
    // }

    modifier checkMintAvailable(uint _yyyymmdd) {
        bool flag = false;
        for(uint i=0; i < seasonList.length; i++){
            if(seasonList[i].startDate >= _yyyymmdd && seasonList[i].endDate <= _yyyymmdd){
                flag = true;
                _;
            }
        }
        require(false,"_ERR[1006]:Date you selected is not opened");
    }

    modifier checkSeasonMintAvailable(uint _season, uint _yyyymmdd) {
        bool flag = false;
        if(seasonList[_season].startDate >= _yyyymmdd && seasonList[_season].endDate <= _yyyymmdd){
            flag = true;
            _;
        }
        require(false,"_ERR[1006]:Date you selected is not opened");
    }

    modifier checkYYYYMMDD(uint256 _yyyymmdd) {
        require(_yyyymmdd >= 10101,"_ERR[1001]:Check your input value");

        uint256 mmdd = _yyyymmdd % 10000;
        uint256 mm = mmdd / 100;
        require(mm >= 1 && mm <= 12,"_ERR[1005]:Check your mm(month) value");

        uint256 dd = mmdd % 100;
        bool ddflag = false;
        require(dd >= 1 && dd <= 31,"_ERR[1004]:Check your dd(day) value");        
        _;
    }

}