const { User } = require('../../db/models');

class userSerivce {

    handleUser = async user => {
        const res = await User.create({ user });
        return res;
    };

}

module.exports = new userSerivce();
