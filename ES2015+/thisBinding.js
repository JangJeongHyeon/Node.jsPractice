var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this; // assinged this which reference the relationship object
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};

relationship1.logFriends();


/**
 * ES6
 */
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(frined => {
            // inherit outter block scope
            console.log(this.name, frined);
        })
    }
};

relationship2.logFriends();