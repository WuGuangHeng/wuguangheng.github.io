# 基于MONAI框架实现食管癌GTV分割
***
这是我机器学习课程的Final Project。

起源于当时关注到MONAI这个开源框架，手头上正好又有之前和华侨医院合作时的数据（其实是之前的合作想法一直未能开展，想借此机会尝试一下），所以就有了这个项目。但遗憾的是，由于时间有限，实验结果并不理想，只能算是一次尝试（应付了作业哈哈哈）。
***
实验选择了两个模型：传统的3D Unet与较新的基于Transformer的UNETR来进行对比，结果可见于课程论文：

<!-- ```pdf
	/学海无涯/科研/machine_learning_HW2.pdf
``` -->
<center>
<!-- <object height="800" width="100%" border="0" data="/学海无涯/科研/machine_learning_HW2.pdf" type="application/pdf"> -->
    <embed src="/学海无涯/科研/machine_learning_HW2.pdf" type="application/pdf" width="100%" height="800" />
<!-- </object> -->
</center>

***
补充一下结果可视化的图（可见于最终presentation的PPT）：

<div align="center">
<img src="/assets/GTV_rets.png" alt="model" style="zoom:75%;" />
</div>

作为一次作业尝试，这个项目是成功的，但是作为一项科研项目，无疑存在着许多问题。后续如果有机会话，还是要完善一下，争取做出成果来。
