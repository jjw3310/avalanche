// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract comments {
    struct comment {
        uint256 index;
        address writer;
        string title;
        string contents;
        uint256 likes;
    } 
    mapping(uint256 => comment[]) commentlist; // tokenid => comment
    mapping(uint256 => mapping(address => bool)) cmtCheck; //tokenid => address => bool
    mapping(uint256 => mapping(uint => mapping(address => bool))) likeCheck; //tokenid => cmtIndex => address => bool

    function writeComment(uint256 _yyyymmdd, string memory _title, string memory _contents) public {
        require(cmtCheck[_yyyymmdd][msg.sender]==false,"_ERR[1000]:Only one comment in a date available");
        cmtCheck[_yyyymmdd][msg.sender] = true;
        uint256 idx = commentlist[_yyyymmdd].length;
        commentlist[_yyyymmdd].push(comment(idx, msg.sender, _title, _contents, 0));
    }

    function getComments(uint256 _yyyymmdd) public view returns(comment[] memory) {
        return commentlist[_yyyymmdd];
    }

    function setLike(uint256 _yyyymmdd, uint256 _idx) public returns(bool, uint256) {
        require(commentlist[_yyyymmdd].length > _idx,"_ERR[1001]:Only one comment in a date available");
        if(likeCheck[_yyyymmdd][_idx][msg.sender]) {
            --commentlist[_yyyymmdd][_idx].likes;
        } else {
            ++commentlist[_yyyymmdd][_idx].likes;
        }
        likeCheck[_yyyymmdd][_idx][msg.sender] = !likeCheck[_yyyymmdd][_idx][msg.sender];
        return (likeCheck[_yyyymmdd][_idx][msg.sender], commentlist[_yyyymmdd][_idx].likes);
    }
    
    function getIsLiked(uint256 _yyyymmdd, uint256 _cmtidx ) public view returns(bool) {
        return likeCheck[_yyyymmdd][_cmtidx][msg.sender];
    }
}