# BroadSurv: A Novel Broad Learning System-based Approach for Survival Analysis
***
**BroadSurv**是一个基于BLS实现的生存分析模型（离散生存分析模型）。具体地，先通过pseudo-observations方法生成伪生存概率，然后将这些伪生存概率作为BLS的输入，最后通过BLS输出生存概率做出预测（回归问题）。

<!-- ![BroadSurv](../../assets/BroadSurv.png)  -->
<div align="center">
<img src="/assets/BroadSurv.png" alt="model" style="zoom:25%;" />
</div>

**BroadSurv**的**关键**在于：将具有时间与观测结果两个因变量的生存数据转化为伪生存概率，从而把生存分析问题转化为标准的回归问题，而这个回归问题可以通过BLS来解决。

论文如下：
<!-- ```pdf
	/学海无涯/科研/BroadSurv.pdf
``` -->
<center>
<embed src="/学海无涯/科研/BroadSurv.pdf" type="application/pdf" width="100%" height="800" />
</center>

***
这篇paper发表于2021 ICCSS国际会议上，也是我发表的第一篇会议论文，同时也是我第一次参加国际会议，虽然过程非常波折与忐忑，但确实收获颇多，尤其是当我知道与我同场演讲的都是一些非常优秀的本科生甚至于博士生，一种自豪感油然而生：我也能和他们同场竞技了哈哈哈哈！

为参会而准备的presentation（PPT+Oral Talk）可见于[ICCSS2021](/学海无涯/学习/大三上/ICCSS2021会议.md)，论文相关代码可见于[Github](https://github.com/WuGuangHeng/BroadSurv)。
