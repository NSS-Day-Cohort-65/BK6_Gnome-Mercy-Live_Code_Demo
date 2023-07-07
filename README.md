# Gnome Mercy

## Overview

A group of industrious forests gnomes has been busy for years making potions and elixirs for local witches and wizards. They have had difficulties keeping track of all the requests for their products. They want us to build an application where they can enter in requests to be stored in a database.

When a gnome is ready to make a potion or elixir, they want to select the request, the gnome that is working on it, and then a group of checkboxes for the gnome to select which ingredients are used for the concoction.

View the gnome-mercy-walkthrough.gif file to see how they imagine the application will work.

## Acceptance Criteria

### Requests

They want a form that will capture the name of the concoction, its purpose, and a dropdown to choose if it is a "Potion" or "Elixir". There should be a button to submit the request.

When the button is clicked, it should immediately appear in a dropdown of pending requests (see Craft Requests drop in animation).

## Completing Requests

The gnomes want to select a pending order from a dropdown.

The gnomes want to select which gnome is working on the request from a dropdown.

The gnomes want all available ingredients listed, with a checkbox next to each one to specify how the concoction was made.

Once all have been selected, they want a button labeled "Finish" they can click on to say it is complete.

When the "Finish" button is clicked, the request should not appear in the Craft Requests dropdown. It should also immediately appear at the bottom of the screen in a list of completed requests.

![gnome mercy example gif](./gnome-mercy-walkthrough.gif)
