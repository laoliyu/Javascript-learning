[twitter]()
写一个函数，参数为 一句话，英文的将
- 如果字符超过140字，返回false
- 如果空字符，返回false
- 以#开始
- 每个单词首字母大写

动态规划：大事化小，小事化了，找到规律
最优子结构 上次不吃，下次就吃
边界 n=1 吃  n=2 不吃，递归子结构
状态转移F(n) = !F(n-1)


楼梯只有12阶，一步走一阶或走两阶，请问走完楼梯多少种走法