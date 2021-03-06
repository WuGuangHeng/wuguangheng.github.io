# 2021 ICCSS会议
***
这是准备参加2021 ICCSS会议时所写的一点东西和总结。当时以为是线下的会议本不打算参加，但后来延期改成线上了，就硬着头皮去参会了（当时是那个不情愿啊）。下午第一场会议，都没来得及睡觉就匆匆往实验室赶，第三个发言，原以为大家参会都会是英语发言，但到头来我却是第一个用英语汇报的，真是诚惶诚恐，还好不是唯一的一个，想起我一开始自我介绍时就听到评委专家：“是英语诶”，我真的笑死哈哈哈哈。发言结束，回答完评委专家的问题（估计没听懂）就只想着溜了。但不得不说其他的参会者做得都挺好的，PPT做得严谨美观（不像我，只想“水”过去）。又想起参会前导师对我说：“好好表现，争取拿一个best paper”，我只是笑了笑，结果当然是没有。总的来说还是一次不错的体验。
***
-  **PPT**

    -  P1——self-introduction

    -  P2——content

    -  **Background——P3—P7**

        -  survival analysis

        -  pseudo-observations

        -  broad learning system

    -  **Proposed method——P8—P9**

        -  BroadSurv

        -  Algorithm

    -  **Experimental Results——P10—P11**

        -  table

        -  figure

    -  **Conclusion——P12—P13**

-  **Oral Talk**

    -  P0

        -  Thanks for introduction. Good afternoon everyone. I am so honored to be with you to communicate academic questions and ideas.
  
        -  My name is Wu Guangheng, a junior student from Jinan university, China. Today, I’m going to talk about our recent work about BroadSurv: A Novel Broad Learning System-based Approach for Survival Analysis.

    -  P2

        -  The content of my presentation is listed as follows.

    -  P3—P5

        -  Here comes the part one. The first thing I would like to talk about is survival analysis. ....... as the figure in lower right shows, when t=0, S(t) equals 1, as time goes on, the survival probability decreases until 0. the data we need to handle in survival analysis is called survival data. ........ Survival data is usually faced with the problem of censoring.Censoring means that the final event is not observed during the research time. We can use a triple {X,T,I} to denote the survival data.

    -  P6

        -  Pseudo-observations is regarded as a way to analyze survival data. In short, it can generate pseudo survival probability with the survival data and help transform a survival analysis problem into a regression problem.

    -  P7

        -  Broad learning system proposed by prof. Chen is an effective way to solve the regression problem mentioned above. BLS adopts a flat structure, and it can achieve faster training speed and higher accuracy just by calculating the pseudo-inverse, which can be extended to other research fields.

    -  P8—P9

        -  In part two I will introduce our proposed method. As the figure on the left side shows, BroadSurv is a two stage method. In the first stage, pseudo conditional probabilities are computed. In the second stage,with these pseudo values, a complicated survival analysis problem is transformed into a regression problem that can be effectively solved by broad learning system. The detailed algorithm is listed on the right side.

    -  P10—P11

        -  Part three are some results of our experiments. The evaluation metric is called C-index, and higher means the better. The last line in Table 2 shows the performance of our proposed model. From these results ,we can see that our proposed method can achieve superior or comparable performance.

    -  P12—P13

        -  The last part is the conclusion. In this paper, a novel two-stage method is proposed to model the survival data. In the first stage, we compute the pseudo survival probabilities with pseudo-observations, and then we make risk predictions based on broad learning system in the second stage. To our knowledge, it is the first time broad learning system is applied to survival analysis with censored data. Rather than the hazard ratio or prognostic index in the PH-based models, BroadSurv can directly compute the survival probability.And the results show that BLS behaves well in the area of survival analysis.

    -  P14

        -  And these are some references.

    - P15

        -  So that is all my presentation. Thank you for listening.

    - Q&A

        -  I’m glad you asked that question.

        -  I appreciate your bringing this to my attention. I’ll have to recheck my sources to see what is correct.

        -  That’s an interesting question, but it would take much too long to answer it adequately. Perhaps we can discuss it later.

        -  Sorry. I'm afraid I know little about that matter. So I don't think I can answer your question right now.

        -  It is a good question and I have no answer at this moment. Can I have your e-mail so that I can email you my possible new findings later?

        -  Sorry, it seems that you are right. Thank you for pointing out that and I will try my best to amend it in my later work.

        -  I’m afraid I don’t understand. Could you please rephrase the question?

-  **一些感受**

    -  PPT制作能力还需加强

    -  表达能力还需加强——英文表达

    -  **背景——引入要自然**

    -  公式的说明——每一个字符的表示含义

    -  图表的说明——位置，强调突出等

    -  结论部分的说明

    -  **Q&A部分的应对**

    -  第一次参加做的不太好，但是这第一次参会体验感觉还挺好的

    -  学术会议认真对待是能够学习到不少东西的

- **Poster**

    - 最后放一下丑丑的Poster，尽管没用上哈哈哈！ 
  
<div align="center">
        <img src="/assets/Poster.png" alt="model" style="zoom:30%" />
</div>