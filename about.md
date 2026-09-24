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
    <div class="prose" markdown="1">

Born in Geneva in 1986, Jeremy Spierer is a lawyer by training and a self-taught photographer. He took up photography seriously in 2011, in the streets and working-class districts of large cities.

His family's history of migration, from several countries of Eastern Europe, runs through his eye: displacement, memory, the search for belonging. His travels, from South America to Ukraine by way of France and Italy, feed series that speak of the fragility and the splendour of the world. His series on the nude, from which several works in CROCO are drawn, sees the female body as a temple, on the edge of the earthly and the sacred.

He works with Leica cameras, often with a direct flash, and has taught at the Leica Akademie Switzerland. Alongside his personal work he collaborates with brands, and edited *Backstage*, a magazine from the 2018 and 2019 Cannes Film Festivals.

He held his first solo exhibition in Geneva in 2013, at Galerie Fahid Taghavi, and has since shown in Paris, Tel Aviv and London. He received the Photo Democracy Award (selected by Steve McCurry) and first prize at the Prix de la Photographie Paris (PX3).

</div>
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
      <ol class="archive-list"><li><span class="a-year">·</span><span class="a-main"><strong>Leica Akademie Switzerland</strong></span><span class="a-venue">Photography courses</span></li></ol>
      <h3 class="label">Publications</h3>
      <ol class="archive-list"><li><span class="a-year">2018–19</span><span class="a-main"><strong><em>Backstage</em></strong> <span class="muted">— editor</span></span><span class="a-venue">Magazine, Cannes Film Festival</span></li></ol>
    </section>
    <p class="about-links"><a class="more" href="{{ '/exhibitions/' | relative_url }}">Exhibitions and awards</a> <a class="more" href="{{ site.data.settings.artsy_url }}" rel="noopener" target="_blank">Works on Artsy</a></p>
  </div>
</section>
