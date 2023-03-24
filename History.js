/*
 * Class of the History of previous album searches
 * To use the History class, create a new instance like this:
 * const myHistory = new History();
*/
class History 
{
  constructor() 
	{
    		this.items = {];
  	}

  // add string to the back of the queue
  enqueue(str) 
	{
    		this.items.push(str);
  	}

  // remove string from the front of the queue and return it
  dequeue() 
	{
    		if (this.isEmpty()) {
      		return "Queue is empty"
    	}
    	return this.items.shift();
  	}

  // return the front string of the queue without removing it
  front() 
	{
    		if (this.isEmpty()) 
		{
      			return "Queue is empty";
    		}
    	return this.items[0];
  	}

  // return the size of the queue
  size() 
	{
    		return this.items.length;
  	}

  // return true if the queue is empty, false otherwise
  isEmpty() 
	{
    		return this.items.length === 0;
  	}

  // print the strings of the queue
  printQueue() 
	{
    		let str = "";
    		for (let i = 0; i < this.items.length; i++) 
		{
      			str += this.items[i] + " ";
    		}
    	return str;
  	}
}

/* Example Commands for this class:
myStringQueue.enqueue("Hello");
myStringQueue.enqueue("World");
console.log(myHistory.printQueue()); // Hello World
console.log(myHistory.size()); // 2
console.log(myHistory.front()); // Hello
console.log(myHistory.dequeue()); // Hello
console.log(myHistory.printQueue()); // World
*/
