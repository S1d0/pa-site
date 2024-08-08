# Portfolio 
Here we are storing all static content e.g. photos, page logo and others. All projects splitted between each area of interest (house/flat areas)

## This folder and subfolders
The structure we are aiming is split between different area of flat. So for time being of creating this idea we split areas into: bathroom, kitchen, rooms, doorways.

## Images size
Although Next.js came with image resizing ability, preferable we would like to end up with to image sizes
* Preview images(thumbnails) should be <b>Optimal:</b> 640x360 pixels (aspect ratio 16:9)
* Gallery images(main images) should be <b>Optimal:</b> 1280x720 pixels (aspect ratio 16:9)

## Dependencies
This folder has strong relation with projects stored in database. Look for migrations json under `$root/scripts/projects.json` to understand how each Project relates to images stored in here


## TODO
In the future when this grow enough we would like to externalized it to some on premise solutions (ftp, firebase, cloud)