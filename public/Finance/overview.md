all **23 design patterns** one by one with:

- ✅ What it is (definition)
- 🧠 Real-world analogy (to understand intuitively)
- 📦 Java code example (simple)
- 🔍 Line-by-line explanation (so you understand every piece)

We’ll go step-by-step in parts so it’s digestible. Let's begin with the **Creational Patterns (5 patterns)** now:

---

## 🧱 1. Singleton Pattern

### ✅ What is it?

Ensures **only one object** of a class is created and shared everywhere.

### 🧠 Analogy:

Only one CEO exists for a company. Everyone accesses the same CEO.

### 📦 Java Code:

```java
public class ConfigManager {
    private static ConfigManager instance = new ConfigManager(); // Step 1
    private ConfigManager() {} // Step 2

    public static ConfigManager getInstance() { // Step 3
        return instance;
    }

    public void showConfig() {
        System.out.println("App Configuration Loaded");
    }
}
```

### 🔍 Line-by-line:

- `private static ConfigManager instance = new ConfigManager();`
  ➤ Creates one static object at class level. Only one copy will exist.

- `private ConfigManager() {}`
  ➤ Constructor is private. So no one outside can use `new ConfigManager()`.

- `public static ConfigManager getInstance()`
  ➤ Method to access the only instance. Everyone will call this.

- `showConfig()`
  ➤ A method to show the usage.

---

## 🧱 2. Factory Method Pattern

### ✅ What is it?

Creates objects based on some input, **without specifying exact class names**.

### 🧠 Analogy:

A pizza shop gives you the pizza type you ask for, like `Veg` or `Cheese`.

### 📦 Java Code:

```java
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle implements Shape {
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

class ShapeFactory {
    public Shape getShape(String type) {
        if (type.equalsIgnoreCase("circle")) return new Circle();
        else if (type.equalsIgnoreCase("rectangle")) return new Rectangle();
        return null;
    }
}
```

### 🔍 Line-by-line:

- `interface Shape`:
  ➤ Declares a common interface.

- `Circle` and `Rectangle`:
  ➤ Implement the `Shape` interface and define how to draw themselves.

- `ShapeFactory.getShape(type)`:
  ➤ Takes a string input and returns the appropriate object without caller needing to know which class is used.

---

## 🧱 3. Abstract Factory Pattern

### ✅ What is it?

Creates **families of related objects**, without specifying their concrete classes.

### 🧠 Analogy:

A GUI toolkit where you can switch themes like Mac or Windows — and it creates buttons, textboxes etc. of that theme.

### 📦 Java Code:

```java
interface Button {
    void paint();
}

class MacButton implements Button {
    public void paint() {
        System.out.println("Painting Mac Button");
    }
}

class WinButton implements Button {
    public void paint() {
        System.out.println("Painting Windows Button");
    }
}

interface GUIFactory {
    Button createButton();
}

class MacFactory implements GUIFactory {
    public Button createButton() {
        return new MacButton();
    }
}

class WinFactory implements GUIFactory {
    public Button createButton() {
        return new WinButton();
    }
}
```

### 🔍 Line-by-line:

- `Button` interface:
  ➤ Defines what all buttons should do (paint).

- `MacButton` and `WinButton`:
  ➤ Specific versions of the button.

- `GUIFactory`:
  ➤ Abstract factory for UI elements.

- `MacFactory` and `WinFactory`:
  ➤ Concrete factories that create platform-specific buttons.

---

## 🧱 4. Builder Pattern

### ✅ What is it?

Constructs complex objects **step-by-step**.

### 🧠 Analogy:

Building a burger — choose bun, patty, toppings — in any order.

### 📦 Java Code:

```java
class Pizza {
    private String dough;
    private String cheese;
    private String topping;

    private Pizza(Builder builder) {
        this.dough = builder.dough;
        this.cheese = builder.cheese;
        this.topping = builder.topping;
    }

    public static class Builder {
        private String dough;
        private String cheese;
        private String topping;

        public Builder setDough(String dough) {
            this.dough = dough;
            return this;
        }

        public Builder setCheese(String cheese) {
            this.cheese = cheese;
            return this;
        }

        public Builder setTopping(String topping) {
            this.topping = topping;
            return this;
        }

        public Pizza build() {
            return new Pizza(this);
        }
    }

    public void display() {
        System.out.println("Pizza with " + dough + ", " + cheese + ", " + topping);
    }
}
```

### 🔍 Line-by-line:

- `Pizza` class is immutable (once built).
- `Builder` is an inner class used to set properties step-by-step.
- `build()` returns the final Pizza object.
- You can use it like:

```java
Pizza p = new Pizza.Builder().setDough("Thin").setCheese("Mozzarella").build();
p.display();
```

---

## 🧱 5. Prototype Pattern

### ✅ What is it?

Creates new objects by **copying existing ones**.

### 🧠 Analogy:

Cloning a character in a game instead of creating a new one from scratch.

### 📦 Java Code:

```java
class Shape implements Cloneable {
    public int x, y;

    public Shape clone() throws CloneNotSupportedException {
        return (Shape) super.clone();
    }
}
```

### 🔍 Line-by-line:

- `implements Cloneable`:
  ➤ Tells Java we want to allow cloning.

- `super.clone()`:
  ➤ Makes a copy of the object’s fields and returns it.

---

Perfect! Let's now move to the next set: **Structural Design Patterns (6–12)**.

These patterns are all about how **classes and objects are composed to form larger structures**, like how bricks build a house.

---

## 🏗️ 6. Adapter Pattern

### ✅ What is it?

Allows incompatible interfaces to work together.

### 🧠 Analogy:

You have a USB-C laptop, but your mouse has a USB-A connector. You use an **adapter** to connect them.

---

### 📦 Java Code:

```java
// Old interface (incompatible)
class OldCharger {
    public void chargeWithFlatPin() {
        System.out.println("Charging using flat pin plug");
    }
}

// New expected interface
interface NewCharger {
    void charge();
}

// Adapter to connect old to new
class ChargerAdapter implements NewCharger {
    private OldCharger oldCharger;

    public ChargerAdapter(OldCharger oldCharger) {
        this.oldCharger = oldCharger;
    }

    public void charge() {
        oldCharger.chargeWithFlatPin(); // Delegates to old method
    }
}
```

### 🔍 Line-by-line:

- `OldCharger`: Has the old interface with method `chargeWithFlatPin`.
- `NewCharger`: The interface expected now (`charge()`).
- `ChargerAdapter`: Wraps `OldCharger` and maps `charge()` to `chargeWithFlatPin()`.

---

## 🏗️ 7. Bridge Pattern

### ✅ What is it?

Separates an abstraction from its implementation so both can vary independently.

### 🧠 Analogy:

A remote control (abstraction) can control a TV or a projector (implementation) without knowing how they work inside.

---

### 📦 Java Code:

```java
interface Device {
    void turnOn();
}

class TV implements Device {
    public void turnOn() {
        System.out.println("TV turned on");
    }
}

class RemoteControl {
    protected Device device;

    public RemoteControl(Device device) {
        this.device = device;
    }

    public void pressPowerButton() {
        device.turnOn();
    }
}
```

### 🔍 Line-by-line:

- `Device`: Interface for any controllable device.
- `TV`: A device implementation.
- `RemoteControl`: Uses `Device`, so it doesn’t care what specific device it controls.

---

## 🏗️ 8. Composite Pattern

### ✅ What is it?

Treat individual objects and groups of objects in the **same way**.

### 🧠 Analogy:

A folder contains files and other folders. You can open a file or a folder similarly.

---

### 📦 Java Code:

```java
interface FileSystemItem {
    void display();
}

class File implements FileSystemItem {
    private String name;
    public File(String name) { this.name = name; }
    public void display() {
        System.out.println("File: " + name);
    }
}

class Folder implements FileSystemItem {
    private String name;
    private List<FileSystemItem> items = new ArrayList<>();

    public Folder(String name) { this.name = name; }

    public void addItem(FileSystemItem item) {
        items.add(item);
    }

    public void display() {
        System.out.println("Folder: " + name);
        for (FileSystemItem item : items) {
            item.display();
        }
    }
}
```

### 🔍 Line-by-line:

- `FileSystemItem`: Common interface.
- `File`: Represents a single file.
- `Folder`: Holds a list of files/folders, and displays all.
- You can now use both with the same `display()` method.

---

## 🏗️ 9. Decorator Pattern

### ✅ What is it?

Adds **extra behavior** to an object dynamically without altering its structure.

### 🧠 Analogy:

Putting toppings on a pizza. You start with a plain base, and decorate it.

---

### 📦 Java Code:

```java
interface Coffee {
    String getDescription();
}

class BasicCoffee implements Coffee {
    public String getDescription() {
        return "Basic Coffee";
    }
}

class MilkDecorator implements Coffee {
    private Coffee coffee;

    public MilkDecorator(Coffee coffee) {
        this.coffee = coffee;
    }

    public String getDescription() {
        return coffee.getDescription() + ", with milk";
    }
}
```

### 🔍 Line-by-line:

- `Coffee`: Interface.
- `BasicCoffee`: Base implementation.
- `MilkDecorator`: Adds milk but still behaves like `Coffee`.

Usage:

```java
Coffee c = new MilkDecorator(new BasicCoffee());
System.out.println(c.getDescription());
```

---

## 🏗️ 10. Facade Pattern

### ✅ What is it?

Provides a **simple interface** to a complex system.

### 🧠 Analogy:

You press one button on the washing machine, and it handles water, motor, and timer behind the scenes.

---

### 📦 Java Code:

```java
class CPU {
    public void start() { System.out.println("CPU Started"); }
}

class Memory {
    public void load() { System.out.println("Memory Loaded"); }
}

class ComputerFacade {
    private CPU cpu = new CPU();
    private Memory memory = new Memory();

    public void startComputer() {
        cpu.start();
        memory.load();
    }
}
```

### 🔍 Line-by-line:

- `CPU` and `Memory`: Internal parts.
- `ComputerFacade`: Simplifies interaction with them using `startComputer()`.

---

## 🏗️ 11. Flyweight Pattern

### ✅ What is it?

Reduces memory usage by sharing common objects.

### 🧠 Analogy:

In a game, instead of creating 1000 tree objects, reuse one tree model and change only the coordinates.

---

### 📦 Java Code:

```java
class Tree {
    private String type; // shared (intrinsic)
    public Tree(String type) {
        this.type = type;
    }

    public void draw(int x, int y) { // extrinsic
        System.out.println("Drawing " + type + " tree at " + x + "," + y);
    }
}
```

Usage:

```java
Tree oakTree = new Tree("Oak");
oakTree.draw(10, 20); // Reuse oakTree with different positions
```

### 🔍 Line-by-line:

- `type` is shared (one model).
- `x, y` are passed at runtime (external details).

---

## 🏗️ 12. Proxy Pattern

### ✅ What is it?

Controls access to another object (for protection, logging, etc.).

### 🧠 Analogy:

You don’t give direct access to a bank vault. A security guard (proxy) controls who enters.

---

### 📦 Java Code:

```java
interface Internet {
    void connectTo(String site);
}

class RealInternet implements Internet {
    public void connectTo(String site) {
        System.out.println("Connecting to " + site);
    }
}

class InternetProxy implements Internet {
    private RealInternet realInternet = new RealInternet();

    public void connectTo(String site) {
        if (site.equals("blocked.com")) {
            System.out.println("Access Denied to " + site);
        } else {
            realInternet.connectTo(site);
        }
    }
}
```

### 🔍 Line-by-line:

- `RealInternet`: Actual connection logic.
- `InternetProxy`: Controls access (e.g., blocks certain sites).

---

Awesome! Let’s now finish the **Behavioral Design Patterns (13–23)** — these patterns are all about **communication between objects**: how they interact, assign responsibility, or flow control.

---

## 🧠 13. **Chain of Responsibility Pattern**

### ✅ What is it?

Passes a request along a chain of handlers. Each handler decides to process or pass it to the next.

### 🧠 Analogy:

A customer support system — Level 1 support handles simple issues, if not, passes to Level 2, and so on.

---

### 📦 Java Code:

```java
abstract class Handler {
    protected Handler next;
    public void setNext(Handler next) {
        this.next = next;
    }
    public abstract void handle(String request);
}

class LowLevelHandler extends Handler {
    public void handle(String request) {
        if (request.equals("low")) {
            System.out.println("Handled by LowLevelHandler");
        } else if (next != null) {
            next.handle(request);
        }
    }
}

class HighLevelHandler extends Handler {
    public void handle(String request) {
        if (request.equals("high")) {
            System.out.println("Handled by HighLevelHandler");
        } else if (next != null) {
            next.handle(request);
        }
    }
}
```

### 🧪 Example Usage:

```java
Handler low = new LowLevelHandler();
Handler high = new HighLevelHandler();

low.setNext(high);
low.handle("high");
```

### 🔍 Explanation:

- Handlers are chained using `setNext`.
- Each handler checks the request and either handles it or passes it.

---

## 🧠 14. **Command Pattern**

### ✅ What is it?

Encapsulates a request as an object. Useful for undo/redo systems.

### 🧠 Analogy:

Think of TV remotes. Each button encapsulates a command like “VolumeUp”.

---

### 📦 Java Code:

```java
interface Command {
    void execute();
}

class Light {
    public void turnOn() {
        System.out.println("Light is ON");
    }
}

class LightOnCommand implements Command {
    private Light light;
    public LightOnCommand(Light light) {
        this.light = light;
    }
    public void execute() {
        light.turnOn();
    }
}

class RemoteControl {
    private Command command;
    public void setCommand(Command command) {
        this.command = command;
    }
    public void pressButton() {
        command.execute();
    }
}
```

### 🔍 Explanation:

- `Command` interface lets us plug and play actions.
- `RemoteControl` doesn’t know or care what command it executes.

---

## 🧠 15. **Interpreter Pattern**

### ✅ What is it?

Interprets sentences in a language (or grammar). Used in parsers, SQL, etc.

### 🧠 Analogy:

A translator converts a sentence like "1 + 2" into an actual result.

---

### 📦 Java Code (simplified):

```java
interface Expression {
    int interpret();
}

class Number implements Expression {
    private int number;
    public Number(int number) { this.number = number; }
    public int interpret() { return number; }
}

class Add implements Expression {
    private Expression left, right;
    public Add(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }
    public int interpret() {
        return left.interpret() + right.interpret();
    }
}
```

### 🧪 Example:

```java
Expression exp = new Add(new Number(1), new Number(2));
System.out.println(exp.interpret()); // 3
```

---

## 🧠 16. **Iterator Pattern**

### ✅ What is it?

Gives a way to access elements of a collection without exposing the underlying structure.

### 🧠 Analogy:

Like flipping through pages of a book with a bookmark — you don’t need to know how the book is stored.

---

### 📦 Java Code:

```java
class NameRepository {
    private String[] names = {"Alice", "Bob", "Charlie"};

    public Iterator getIterator() {
        return new NameIterator();
    }

    private class NameIterator implements Iterator {
        int index;
        public boolean hasNext() {
            return index < names.length;
        }
        public Object next() {
            return hasNext() ? names[index++] : null;
        }
    }
}
```

---

## 🧠 17. **Mediator Pattern**

### ✅ What is it?

Defines an object that **centralizes communication** between classes.

### 🧠 Analogy:

In a flight control tower, planes don’t talk to each other — they talk to the tower.

---

### 📦 Java Code:

```java
interface Mediator {
    void send(String message, Colleague colleague);
}

abstract class Colleague {
    protected Mediator mediator;
    public Colleague(Mediator mediator) {
        this.mediator = mediator;
    }
}

class User extends Colleague {
    public User(Mediator mediator) {
        super(mediator);
    }

    public void send(String msg) {
        mediator.send(msg, this);
    }

    public void receive(String msg) {
        System.out.println("Received: " + msg);
    }
}

class ChatMediator implements Mediator {
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
    }

    public void send(String msg, Colleague sender) {
        for (User user : users) {
            if (user != sender) user.receive(msg);
        }
    }
}
```

---

## 🧠 18. **Memento Pattern**

### ✅ What is it?

Captures and restores an object’s previous state (like undo).

### 🧠 Analogy:

Ctrl+Z in editors — you return to a previous version.

---

### 📦 Java Code:

```java
class Editor {
    private String text;

    public void setText(String text) {
        this.text = text;
    }

    public Memento save() {
        return new Memento(text);
    }

    public void restore(Memento m) {
        this.text = m.getText();
    }

    public String getText() {
        return text;
    }

    static class Memento {
        private final String text;
        public Memento(String text) {
            this.text = text;
        }
        public String getText() {
            return text;
        }
    }
}
```

---

## 🧠 19. **Observer Pattern**

### ✅ What is it?

Defines a **one-to-many dependency** so when one object changes, all its dependents are notified.

### 🧠 Analogy:

You subscribe to a YouTube channel. When the creator uploads, all subscribers are notified.

---

### 📦 Java Code:

```java
interface Observer {
    void update(String message);
}

class Subscriber implements Observer {
    private String name;
    public Subscriber(String name) { this.name = name; }
    public void update(String msg) {
        System.out.println(name + " received: " + msg);
    }
}

class Channel {
    private List<Observer> subs = new ArrayList<>();
    public void subscribe(Observer o) {
        subs.add(o);
    }
    public void notifyAll(String msg) {
        for (Observer o : subs) o.update(msg);
    }
}
```

---

## 🧠 20. **State Pattern**

### ✅ What is it?

Allows an object to alter its behavior when its internal **state changes**.

### 🧠 Analogy:

A fan has Off, Low, High states — pressing the button changes behavior.

---

### 📦 Java Code:

```java
interface State {
    void pressButton();
}

class Fan {
    private State state;
    public void setState(State state) {
        this.state = state;
    }

    public void pressButton() {
        state.pressButton();
    }
}

class OffState implements State {
    public void pressButton() {
        System.out.println("Turning fan ON");
    }
}
class OnState implements State {
    public void pressButton() {
        System.out.println("Turning fan OFF");
    }
}
```

---

## 🧠 21. **Strategy Pattern**

### ✅ What is it?

Enables selecting an algorithm at runtime.

### 🧠 Analogy:

Sorting a list — you can choose bubble sort or quick sort depending on the need.

---

### 📦 Java Code:

```java
interface Strategy {
    int execute(int a, int b);
}

class Add implements Strategy {
    public int execute(int a, int b) {
        return a + b;
    }
}

class Multiply implements Strategy {
    public int execute(int a, int b) {
        return a * b;
    }
}

class Context {
    private Strategy strategy;
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }
    public int executeStrategy(int a, int b) {
        return strategy.execute(a, b);
    }
}
```

---

## 🧠 22. **Template Method Pattern**

### ✅ What is it?

Defines the **skeleton of an algorithm**, letting subclasses fill in the steps.

### 🧠 Analogy:

Baking a cake has steps: mix, bake, decorate. Each chef does it slightly differently.

---

### 📦 Java Code:

```java
abstract class DataProcessor {
    public final void process() {
        read();
        processData();
        save();
    }

    abstract void read();
    abstract void processData();
    abstract void save();
}

class CSVProcessor extends DataProcessor {
    void read() { System.out.println("Reading CSV"); }
    void processData() { System.out.println("Processing CSV"); }
    void save() { System.out.println("Saving CSV"); }
}
```

---

## 🧠 23. **Visitor Pattern**

### ✅ What is it?

Separates operations from the objects they work on.

### 🧠 Analogy:

You add a "tax" operation on different item types (book, food) **without changing** the item classes.

---

### 📦 Java Code:

```java
interface Item {
    void accept(Visitor visitor);
}

class Book implements Item {
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

interface Visitor {
    void visit(Book book);
}

class TaxVisitor implements Visitor {
    public void visit(Book book) {
        System.out.println("Applying tax to book");
    }
}
```

---
