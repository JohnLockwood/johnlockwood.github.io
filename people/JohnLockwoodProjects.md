---
title: John Lockwood - Projects
#subtitle: 
layout: page
show_sidebar: false
hide_hero: true
permalink: /people/JohnLockwood/projects
hide_footer: true
menubar:  team_menu
---
# John Lockwood Projects
Here's what John is working on lately.

{% for post in site.posts %}
{% if post.categories contains "John's Projects" %}
<p>
    <a href="{{ post.url }}">{{ post.title }}</a><br />  {{post.description}}
</p>
{% endif %}
{% endfor %}




