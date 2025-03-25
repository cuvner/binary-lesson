# My Tutorial

## Step 1

Declare your variables.  
You can find** " " ** in **advanced**  -> **text**

```blocks
let binary = ""
let decimal = 0
decimal = 0
binary = ""
```

## Step 2
Add the buttons
```blocks
input.onButtonPressed(Button.A, function () {

})

input.onButtonPressed(Button.B, function () {

})
```

## Step 3 
Save the user input into **binary**. 
Show updated **binary** string and add a **clear** to refresh screen.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    binary = "" + binary + "0"

    basic.showString(binary)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    binary = "" + binary + "1"
    basic.showString(binary)
})
 ```
## Step 4
Calculate **decimal** value "on the fly"

``` blocks
decimal = decimal * 2
decimal = decimal * 2 + 1
```

## Step 4
Putting it all together
```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    binary = "" + binary + "0"
    decimal = decimal * 2
    basic.showString(binary)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    binary = "" + binary + "1"
    decimal = decimal * 2 + 1
    basic.showString(binary)
})
```

## Step 4
Add an output for the decimal value
```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(decimal)
})
```

**Congratulations, you did it!**
    
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
