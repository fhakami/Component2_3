// Fatimah Yahya Hakami
// 1706291
// IAR

// CPCS 324 Algorithms & Data Structures 2
// Queue data structure starter - Code Plan
// 2019, Dr. Muhammad Al-Hashimi


// -----------------------------------------------------------------------
// Basic design decisions and implementation planning (objects & interfaces)

// Initial requirement: support ops of a minimal breadth-first search
// Design decisions: 
//   base on (re-use) the 324 linked list implementation
//   enqueue at list bottom  (reuse list's insert method)
//   therefore, dequeue at list top (resuse "first" pointer)


// -----------------------------------------------------------------------
// Queue object constructor

function Queue() {
	// specify object data and property fields

	this.head = new List();                // (fill code) queue head (front)

	// specify (i.e., design) methods (interface names)

	this.isEmpty = qEmpty;             // (fill code) return true if queue empty
	this.enqueue = qEnqueue;   // insert item at tail of queue
	this.dequeue = qDequeue;            // (fill) remove and return item from head of queue


}

// -----------------------------------------------------------------------
// functions used by methods of Queue() object
//

// specify (i.e., design) interfaces (arguments and return values)

// --------------------
// implement queue empty condition based on linked list .isEmpty() method

function qEmpty()              // note "q" prefix to distinguish from similar 
// function in linked-list package
{
	//return (this.first == null);
	return (this.head.isEmpty()==true);               // (replace by correct call)
}

// --------------------
function qEnqueue(item) {
this.head.insert(item);
	
	
}

// --------------------
function qDequeue() {
	return this.head.deleteFirst();
}
