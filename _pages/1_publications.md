---
layout: page
permalink: /publications/
title: Publications
description: Publications by years in reversed order
years = [2020, 2019, 2018, 2017, 2016, 2014]

<!-- {% raw %} -->
{% for y in page.years %}
    <h3 class="year">{{y}}</h3>
    {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
<!-- {% endraw %}) -->
