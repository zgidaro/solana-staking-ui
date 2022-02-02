## What difficulties did you face, if any? How did you work around them?

I didn't really face any difficulties. Although the Figma UI is very nice, it does not follow the Material Guidelines. Most of the components in Figma are custom and required additional styling. It ended up being more work to customize and override the Material UI components instead of just creating them from scratch.

## Did you make any technical decisions when building the frontend? If yes, what were they and why did you make the decisions you did?

As mentioned in the previous question, Material UI components required more customization than creating a custom component. For the widgets section, instead of using the MUI Box component, I created a custom component and displayed them using flexbox. For inputs, again, I created a custom component instead of using MUI.

I decided to go ahead and work on the bonus tasks. I used Context API to manage my states instead of Redux since Redux is a bit of an overkill for such a small task. I only required three values to be managed by the state. In a larger project, I would have gone with Redux instead.

## What did you like and what didn’t you like about this work task? How would you improve it?

The work task was as expected. It would have been nice to have different versions of the UI since the Figma UI was updated as I was working on the task. I had to change my UI a few times to match the one in Figma.

## How long did you take to do this task? Do you think the task was too long or too short?

It took about 5 hours to do this task (including the stretch goals). I think the length was fair since I took my time to complete it.

## Do you have any other thoughts or feedback?

My feedback was to add a new section for colors and typography to make it easier to style. As of January 31st, I noticed that this was added. Adding the different styles of typography and their styling would have been very helpful as well (heading, labels, buttons, etc).