type IsPositiveFunc = (value: number) => boolean;

const isPositive: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive(5);

// エラー例
// isPositive('foo');
const res: boolean = isPositive(123);
