const obj = {
    id: '1',
    name: 'John',
    phone: '123 23322 22',
    fullName: function (lastName) {
        return this.name + ' ' + lastName;
    }
};

module.exports = obj;