function showUserInfo(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.private);
}
// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false
});
// エラー例
showUserInfo({
    name: 'Mary Sue',
    private: false
});
var usr = {
    name: 'Gombe Nanashino',
    age: 100
};
