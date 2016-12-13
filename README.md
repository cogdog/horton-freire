# We Make The Read by Annotating

![Dynamic Cover](https://github.com/cogdog/horton-freire/blob/master/imgages/cover.jpg "a new book cover")

Dynamic display of annotated quotes from the [Hypothes.is](http://hypothes.is) annotation activity of *We Make the Road By Walking*. See it in action at https://cogdog.github.io/horton-freire/

Data is read via json from the [Google Spreadsheet created by Adam Croom](https://docs.google.com/spreadsheets/d/15yb4A2JBWHUscoEOGwRIlJh4DHccI9OnaQ1kzWfvghc/edit#gid=1707852300).

The quotes are all selections that have been annotated and are loaded in realtime. Clicking on either Myles or Paulo on the interface, slides the other man off stage, and loads one quote randomly on display. Clicking the figure will pull the man back on stage, and load two now quotes combined behind them.

I cannot explain exactly why I did this; on seeing the figures on the cover of the book, I thought first to do an animated GIF. But I wondered how much was possible with CSS and Javascript.

The background image is sized to the window using the [jQuery Backstretch plugin](http://srobbin.com/jquery-plugins/backstretch/). The rest of the CSS and Javascript is my clumsy effort to make it work. There are some funky things on the click areas.

Thanks to [Tom Woodward](http://bionicteaching.com/) for giving my a leg up on the Google Spreadsheets json query.
