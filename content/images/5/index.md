---
date: 2025-05-22T19:59:39+0900
title: Zodiac & Planets
draft: true 

thumb: 1.png
main: Illustration

category:  Illustrations
description: 十二星座のイラストカット

---

## ZODIAC
{.title}

<div id="zodiac">

![](zodiac/1.png)![](zodiac/2.png)![](zodiac/3.png)![](zodiac/4.png)![](zodiac/5.png)![](zodiac/6.png)![](zodiac/7.png)![](zodiac/8.png)![](zodiac/9.png)![](zodiac/10.png)![](zodiac/11.png)![](zodiac/12.png)
</div>
<br><br>

## PLANETS
{.title}

<div id="planet">

![](planet/1.png)![](planet/1.png)
</div>

{{< STYLE >}}
body{
     
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 268 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.2' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }   
#zodiac,#planet{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    figure{
    margin: 0;
    width: 100%;
   mix-blend-mode: color-burn;
   filter: brightness(1.1);
   box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.2);
   line-height:0;


    img{
            border-radius: .3rem;
    }
}
}
#zodiac > figure{
        max-width: max(calc(25% - 1rem), 9rem);
}

#planet > figure{
        max-width: max(calc(50% - 1rem), 18rem);
}
{{< /STYLE >}}

<br>

Title
: {{< param "title" >}}　

Year
: 2025

Software
: Photoshop
