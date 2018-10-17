pragma solidity ^0.4.20;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract monster is ERC721{
    
    struct characteristics{
        string name;
        uint level;
        uint attack;
        uint defence;
    }
    
    characteristics[] public data;
    address public owner;
        
        
    constructor(){
        owner = msg.sender;
    }
    

    function CreateMonster (string name,uint level, uint256 attack, uint256 defence, address _to) external returns(bool)  {
       
        require(msg.sender == owner);
        uint256 _id;
        _id = data.length;
        data.push(characteristics(name, level, attack, defence));
        _mint(_to, _id);
        return true;

    }

    function battle (uint _id1, uint _id2)  external {
        
        require(ownerOf(_id1) == msg.sender);
        characteristics storage monster1 = data[_id1];
        characteristics storage monster2 = data[_id2];

        if(monster1.attack > monster2.defence)
        {
            monster1.level += 1;
            monster1.attack += 5;

        }
        else{
            monster2.level += 1;
            monster2.attack += 5;
        }

    }  
}