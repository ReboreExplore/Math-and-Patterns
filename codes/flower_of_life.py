# All necessery imports
import turtle
import time
WIDTH, HEIGHT = 500, 500 # specifies the height and width of the screen
RADIUS = 100

def init_turtle():
    screen = turtle.Screen()
    screen.setup(HEIGHT,WIDTH)
    screen.title('Flower of Life')
    screen.bgcolor("black")

def create_turtle():
    t = turtle.Turtle()
    t.speed(9)
    t.color('red')
    t.shape('turtle')
    return t

def create_first_seed(t):
    t.circle(RADIUS)
    t.left(90)
    t.penup()
    t.forward(RADIUS)
    t.pendown()
    for i in range(6):
        t.right(60)
        t.circle(RADIUS)

def create_one_folds(colors,t,fold,r):
    t.color(colors)
    t.penup()
    t.right(30)
    t.forward(RADIUS)
    t.right(90)
    t.pendown()
    t.right(60)
    t.circle(RADIUS)
    t.left(60)
    for i in range(fold):
        if i%2==0 and i!=0:
            t.penup()
            t.left(90)
            t.forward(RADIUS)
            t.right(150)
            t.pendown()
        t.circle(RADIUS)
        t.left(60)
    
init_turtle()
t = create_turtle()
create_first_seed(t)
create_one_folds('blue',t,12,2)

time.sleep(5)