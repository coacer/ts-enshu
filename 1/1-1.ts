function isPositive(num: number) {
    return num >= 0;
}

// 使用例
isPositive(3);

// エラー例
// isPositive('123');
const numVar: boolean = isPositive(-5);
