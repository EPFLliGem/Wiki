# Wiki updating guide

Team page: http://2017.igem.org/Team:EPFL

! You must login to edit the page

## Notebooks

1. Place your content in this template

```html
<div class="weekly-notebook {x}" id="week{y}">
	<div class="date"> DD/MM/2017 - DD/MM/2017 </div>
	<div class="goal">
		Place the goal of the week here
	</div>
	<div class="summary">
		<ul>
		    <li> First task done</li>
		    <li> Second task done </li>
		    <li> Third task done </li>
		    <li> Copy/Remove the <li>...</li> tags if you have more/less tasks to add .... </li>
		</ul>
	</div>
 </div>
 ```
 
	- Replace DD/MM with the coresponding date/month
	- Replace {y} with the number of week (i.e. 02 for the second week, 10 for the 10th week) 
	- Replace {x} with left if the week is odd or with right if the week is even

2. Go to http://2017.igem.org/Team:EPFL/Notebook 
3. Go to Wiki tools -> Edit
4. Find the line `<!-- Insert new week before this line -->`
5. Copy/paste the prepared content above the line
6. Save or preview the updated page

`N.B. The option to add figures to notebooks will be added in few days.` 

### Link a pdf

1. Go to the bottom of the page and find this div: 

```html
<div class="weekly-notebook left" id="refs">
	
	<div class="goal">Detailed notebooks</div>
	<div class="summary">
		<ul>
		    <li><a href="http://2017.igem.org/wiki/images/b/b7/T--EPFL--Buffer.pdf">Remove this</a></li>
		</ul>
	</div>
 </div>
```
2. Upload your pdf as explained <a href="#upload-fig">here</a>
3. Link it as showed in the example above (<li><a href="Link here">Name of the link here</a></li>)
---

## Aptamers, Toehold or Lysates description/results

1. Place your content in this template

```html 
<div class="part-content"> 
	<div class="title" > Add the title of the section here </div>
	<div class="subtitle">Add a subtitle here, this is optional</div>

		<p> Add first paragraphe here</p>
		<p> Add second paragraphe here</p>
		<p> Add third paragraphe here...  </p>
		<p> Add/Remove the <p>...</p> tags if you have more/less paragraphs to add .... </p>

      	<div class="subtitle">Add another subtitle here, this is optional</div>

                <p> Add first paragraphe here</p>
		<p> Add second paragraphe here</p>
		<p> Add third paragraphe here...  </p>
		<p> Add/Remove the <p>...</p> tags if you have more/less paragraphs to add .... </p>           
</div>
```
In order to add a figure in your description, use this template: 

```html
...
<p> In this paragraph I talk about my figure...</p>
<figure>
	<img src="Link to your image here">
	<figcaption>Title of the figure</figcaption>
</figure>
...
```
In order to add a list instead of paragraph (don't put the list in paragraph), use this template: 

```html
<ul class="middle">
	<li>First item</li>
	<li>Second item</li>
	<li>And so on...</li>
</ul>
```

Follow [this](#upload-fig) description to get the link for your image. 

2. Go to http://2017.igem.org/Team:EPFL/{Y}/{X}
	- Replace {X} by Aptamers, Lysates or Toehold
	- Replace {Y} by Results or Description 
3. Go to Wiki tools -> Edit
4. Copy/Paste the prepared content between a `<div>`s with `class="part-content"`, depending on the desired position in the Wiki. 
6. Save or preview the updated page

--- 

## Upload image on the wiki server <div id="upload-fig"/>
1. Go to http://2017.igem.org/Team:EPFL 
2. Go to Wiki tools -> Upload files 
3. Select the desired file from your computer
4. Fill in the `Destination filename` with `T--EPFL--page_nameOfFile.extension` where `page` is the name of the target page for the file, `extension` is the type of the file (i.e. jpg, png, ...) 
5. Click on `Upload file`
6. Click on the thumbnail of the image to be redirected to the link that you can use on the wiki
7. Copy the url and use it as `src` for your figure

---
## Protocols 
```html

```
---
## If it doesn't work?

If something doesn't work or you have a suggestion to make please report an issue [here](https://github.com/EPFLliGem/Wiki/issues). 
