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

Born in Geneva in 1986, Jeremy Spierer is a self-taught photographer. Since 2011, in the street as in the studio, he has been after one thing: a way back to instinct.

His work starts from the pull of what is not meant to be seen, and from a refusal to pretend otherwise. There is something of the voyeur in him; rather than hide it, he takes responsibility for it. The direct flash is that gesture: nothing softened, nothing made pretty, and the one who looks standing inside the scene rather than behind it.

He approaches the people he photographs as one approaches something wild, knowing he will not have the last word. In the end, it is she who wins. She looks back, and whoever came to watch finds themselves watched, and challenged. Between desire and the forbidden, his photographs ask what is left once we stop pretending not to look.

The street is the same territory and the same chase. He counts Daido Moriyama and Nobuyoshi Araki among his influences, and has no use for smooth glamour or beauty for its own sake.

He works with Leica cameras and has taught at the Leica Akademie Switzerland. He edited *Backstage*, a magazine from the 2018 and 2019 Cannes Film Festivals. After his first solo exhibition at Galerie Fahid Taghavi in Geneva in 2013, he showed in Paris, Tel Aviv and London, then at MAZE Art Gstaad and MAZE Art St. Moritz in 2026. *CROCO*, a duo exhibition with the painter Tiphaine Koltes, opens at Galerie Fahid Taghavi in November 2026. He received the Photo Democracy Award (selected by Steve McCurry) and first prize at the Prix de la Photographie Paris (PX3).

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
