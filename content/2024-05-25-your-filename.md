## A New Post

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.


<!-- video-list.njk -->
<ul>
  {% for videoKey, videos in videoInfo %}
    <li>
      <h2>{{ videoKey }}</h2>
      <ul>
        {% for video in videos %}
          <li>
            <h3>{{ video.title }}</h3>
            <p>{{ video.description }}</p>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>