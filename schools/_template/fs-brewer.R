# fs-brewer: Brews a new field school.

library(brew)

template <- "fs-template.brew"

title <- readline(prompt = "What is the title? format: year-location (season): ")

brew(file = template)

### Redo this as a shiny app.

- id: test-listing
contents: /*/index.qmd
include:
  timing: "test"
type: grid
filter-ui: false
image-align: left
image-placeholder: ../images/peer-wide.png
image-height: 100px
field-display-names: 
  params.description: " "
params.facilitators.0: "Lead facilitator"
fields: [params.date, image, title, params.description.0, params.facilitators.0]
