var id = null;
function myDown()
{
    var element = document.getElementById("border-in");

    var position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 348)
        {
            clearInterval(id)
        }
        else{
            position++;
            element.style.top = position +'px';
        }
    }
}

function myRight()
{
    var element = document.getElementById("border-in");

    var position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 348)
        {
            clearInterval(id)
        }
        else{
            position++;
            element.style.left = position +'px';
        }
    }
}

function myLeft()
{
    var element = document.getElementById("border-in");

    var position = 348;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 0)
        {
            clearInterval(id)
        }
        else{
            position--;
            element.style.left = position +'px';
        }
    }
}

function myUp()
{
    var element = document.getElementById("border-in");

    var position = 348;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 0)
        {
            clearInterval(id)
        }
        else{
            position--;
            element.style.top =position +'px';
        }
    }
}

function myDownRight()
{
    var element = document.getElementById("border-in");

    var position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 348)
        {
            clearInterval(id)
        }
        else{
            position++;
            element.style.top = position +'px';
            element.style.left = position +'px';

        }
    }
}

function myDownLeft()
{
    var element = document.getElementById("border-in");

    var position = 348;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 0)
        {
            clearInterval(id)
        }
        else{
            position--;
            element.style.bottom = position +'px';
            element.style.left = position +'px';

        }
    }
}

function myDownRight()
{
    var element = document.getElementById("border-in");

    var position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 348)
        {
            clearInterval(id)
        }
        else{
            position++;
            element.style.top = position +'px';
            element.style.left = position +'px';

        }
    }
}

function myUpLeft()
{
    var element = document.getElementById("border-in");

    var position = 348;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 0)
        {
            clearInterval(id)
        }
        else{
            position--;
            element.style.top = position +'px';
            element.style.left = position +'px';

        }
    }
}

function myUpRight()
{
    var element = document.getElementById("border-in");

    var position = 348;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame()
    {
        if (position == 0)
        {
            clearInterval(id)
        }
        else{
            position--;
            element.style.top = position +'px';
            element.style.right = position +'px';

        }
    }
}