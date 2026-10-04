---
layout: default
title: About
permalink: /about/
portrait: /assets/img/about/jeremy-spierer.jpg
portrait_caption: "Jeremy Spierer in the studio, 2026"
---
<section class="about wrap wide">
  <figure class="about-portrait">
    <img src="{{ page.portrait | relative_url }}" alt="Portrait of Jeremy Spierer holding a Leica camera" decoding="async">
    <figcaption class="muted">{{ page.portrait_caption }}</figcaption>
  </figure>
  <div class="about-text">
    <h1 class="display">About</h1>
    <section class="artist-statement" aria-labelledby="h-statement">
      <h2 id="h-statement" class="label">Statement</h2>
      <div class="statement-body" markdown="1">

Since childhood, my eyes have lingered on what I was not supposed to see. I never stopped looking; I only stopped hiding.

My flash is a confession. It writes me into the scene and tears from the moment what the eye lets slip: skin without artifice, a gesture tipping over, instinct rising to the surface. From burnt-out white to total black, I am not after the beautiful picture, but the emotion that makes me press the shutter.

In the street, I go unseen. In the studio, I face something wild. It is the same chase, and she always has the last word: she looks me in the eye, then she looks at you. In front of my pictures, you are the one caught in *flagrant délit*.

</div>
      <p class="statement-sign">Jeremy Spierer</p>
    </section>
    <section class="bio" aria-labelledby="h-bio">
      <h2 id="h-bio" class="label">Biography</h2>
      <div class="prose" markdown="1">

Born in Geneva in 1986, Jeremy Spierer is a self-taught photographer. Since 2011 he has worked in the street and in the studio, with Leica cameras and a direct flash. He counts Daido Moriyama and Nobuyoshi Araki among his influences.

He taught at the Leica Akademie Switzerland in 2019 and 2020 and has since mentored photographers privately. He edited *Backstage*, a magazine from the 2018 and 2019 Cannes Film Festivals. After his first solo exhibition at Galerie Fahid Taghavi in Geneva in 2013, he showed in Paris, Tel Aviv and London, then at MAZE Art Gstaad and MAZE Art St. Moritz in 2026. *CROCO*, a duo exhibition with the painter Tiphaine Koltes, opens at Galerie Fahid Taghavi in November 2026. He received the Photo Democracy Award (selected by Steve McCurry) and first prize at the Prix de la Photographie Paris (PX3).

</div>
    </section>
    <section class="cv" aria-labelledby="h-cv">
      <h2 id="h-cv" class="h2">CV</h2>
      <h3 class="label">Selected exhibitions</h3>
      <ol class="archive-list">
        {% assign all = site.exhibitions | sort: 'start' | reverse %}{% for e in all %}
        <li><span class="a-year">{% if e.year != '' %}{{ e.year }}{% else %}·{% endif %}</span><span class="a-main"><strong>{{ e.title }}</strong>{% if e.kind %} <span class="muted">— {{ e.kind }}</span>{% endif %}</span><span class="a-venue">{{ e.venue }}{% if e.city != '' %}, {{ e.city }}{% endif %}</span></li>
        {% endfor %}
      </ol>
      <h3 class="label">Awards</h3>
      <ol class="archive-list">
        {% for a in site.data.awards %}<li><span class="a-year">{{ a.year }}</span><span class="a-main"><strong>{{ a.title }}</strong></span><span class="a-venue">{{ a.detail }}</span></li>{% endfor %}
      </ol>
      <h3 class="label">Teaching</h3>
      <ol class="archive-list"><li><span class="a-year">2020–</span><span class="a-main"><strong>Private mentoring</strong></span><span class="a-venue">One-to-one lessons</span></li><li><span class="a-year">2019–20</span><span class="a-main"><strong>Leica Akademie Switzerland</strong></span><span class="a-venue">Photography courses</span></li></ol>
      <h3 class="label">Publications</h3>
      <ol class="archive-list"><li><span class="a-year">2018–19</span><span class="a-main"><strong><em>Backstage</em></strong> <span class="muted">— editor</span></span><span class="a-venue">Magazine, Cannes Film Festival</span></li></ol>
    </section>
    <p class="about-links"><a class="more" href="{{ '/exhibitions/' | relative_url }}">Exhibitions and awards</a> <a class="more" href="{{ site.data.settings.artsy_url }}" rel="noopener" target="_blank">Works on Artsy</a></p>
  </div>
</section>
