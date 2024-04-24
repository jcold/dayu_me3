---
title: Makefile 浅用
date: 2023-10-10 15:16
slug: makefile
---

越来越开始注意节俭了，之前想把每个工具用的飞起，现在则是尽可能少的使用到多种工具。主要是减少依赖，因为发现精力有限。
每个工具用到最后，都会发现一些不能轻易满足的情况，这时候就要更深入的研究，或许能够成功，但即使成功了又能如何？花了那么多精力，换来个百天用不到一次的成果，而且很快就会忘记，那么你所花费的时间，都将没有啥意义，所以适可而止的浅用一下，容易解决当下问题就好。

Makefile 就是一个很好的例子，他解决的痛点是，依赖变更就执行某些命令，这对开发调试来说很方便，可当你有更进一步的需求时，才发现它的语法规则简直是全新的，且掺杂着 Bash ，时常分不清哪些是 Makefile 语法，哪些是 Bash 语法，很是痛苦。

我现在只用一点点，仅执行指定Target，可能附加上依赖，其他就执行外部 Bash，当做粘合剂用。提到Bash的时候也是同样，每当写到较深的时候，用举步维艰来形容一点儿都不为过，索性最后都是Python来兜底。

## 使用参考

- [使用变量 — 跟我一起写Makefile 1.0 文档](https://seisman.github.io/how-to-write-makefile/variables.html)
- [Makefile 简介 | 吴良超的学习笔记](https://wulc.me/2018/12/05/Makefile%20%E7%AE%80%E4%BB%8B/)
- [Makefile 语法详解 (2)- 变量、条件判断与函数 | 吴良超的学习笔记](https://wulc.me/2018/12/07/Makefile%20%E8%AF%AD%E6%B3%95%E8%AF%A6%E8%A7%A3(2)-%E5%8F%98%E9%87%8F%E3%80%81%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%E4%B8%8E%E5%87%BD%E6%95%B0/)