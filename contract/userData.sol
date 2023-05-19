// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract UserData {
    struct User {
        address addr;
        // string id;
        bytes32 password;
        uint256 createdAt;
        uint256 updatedAt;
        //uint256 loginAt; // gas may required when user login
    }

    mapping(string => User) userList; // id => User
    mapping(address => string) userID; // wallet addr => user id
    string[] nicknameList = ["Glitch_Hacker","AV-BALANCE","NEAR_BEER","POLY-HOLY","BNB-AIR","BI-CYCLE"];
    uint256 userCnt;

//Max ERR NUM = 3
    //signUp INPUT: id,pass     RETURN:bool
    function signUp(string memory _id, string memory _password) public returns (bool)
    {//id,pass input value check && id check
        require(bytes(_id).length * bytes(_password).length > 0, "_ERR[1003]:Check Your Input Values");
        require(userList[_id].createdAt == 0, "_ERR[1000]:ID Already Exists");

        bytes32 pass = keccak256(abi.encodePacked(_password));
        // userList[_id] = User(address(0), pass, block.timestamp, 0);
        userList[nicknameList[userCnt]] = User(address(0), pass, block.timestamp, 0);
        // userID[msg.sender] = _id;
        userID[msg.sender] = nicknameList[userCnt];
        userCnt++;
        return true;
    }

    //login with id & password
    function login(string memory _id, string memory _password) public view returns (bool)
    {//id check && password check
        require(userList[_id].createdAt > 0, "_ERR[1001]:Check Your ID or Password");
        // require(userList[_id].password == keccak256(abi.encodePacked(_password)), "_ERR[1001]:Check Your ID or Password");
        return true; // no gas required

        // userList[_id].loginAt = block.timestamp;
        // return true;
    }

    //return user data without password
    function getUser(string memory _id) public view returns (User memory)
    {//check id
        require(userList[_id].createdAt > 0, "_ERR[1002]:ID Doesn't Exist");
        User memory tmp = userList[_id];
        tmp.password = 0;
        return tmp;
    }

    //delete user data
    function deleteUser(string memory _id, string memory _password) public returns (bool) {
        require(userList[_id].createdAt > 0, "_ERR[1001]:Check Your ID or Password");
        require(userList[_id].password == keccak256(abi.encodePacked(_password)), "_ERR[1001]:Check Your ID or Password");
        
        delete userID[userList[_id].addr];
        delete userList[_id];
        return true;
    }

    //update user wallet address
    function updateUserAddress(string memory _id, string memory _password, address _addr) public returns (bool) {
        require(userList[_id].createdAt > 0, "_ERR[1001]:Check Your ID or Password");
        require(userList[_id].password == keccak256(abi.encodePacked(_password)), "_ERR[1001]:Check Your ID or Password");
        
        require(keccak256(abi.encodePacked(userID[_addr])) == keccak256(abi.encodePacked(_id))," ");
        userList[_id].addr = _addr;
        userList[_id].updatedAt = block.timestamp;

        userID[_addr] = _id;
        return true;
    }

    //change user password when knows present password
    function updateUserPassword(string memory _id, string memory _password, string memory _nextPassword) public returns (bool) {
        require(bytes(_id).length * bytes(_password).length > 0, "_ERR[1003]:Check Your Input Values");
        require(userList[_id].createdAt > 0, "_ERR[1001]:Check Your ID or Password");
        require(userList[_id].password == keccak256(abi.encodePacked(_password)), "_ERR[1001]:Check Your ID or Password");
        
        userList[_id].password = keccak256(abi.encodePacked(_nextPassword));
        userList[_id].updatedAt = block.timestamp;
        return true;
    }

    function getIdFromAddress(address _userAddress) public view returns(string memory) {
        return userID[_userAddress];
    }
}