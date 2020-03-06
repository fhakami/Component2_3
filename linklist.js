// CPCS 324 Algorithms & Data Structures 2
// Linked list data structure
// 2019, Dr. Muhammad Al-Hashimi


// -----------------------------------------------------------------------
// Linked list node object constructor

function LNode(item)
{
	this.item = item;         // can store in list any object as data
	this.next = null;
}

// -----------------------------------------------------------------------
// Linked list object constructor

function List()
{
	this.first = null;           // list initially empty

	// --------------------
	// more list processing methods could be added here

	this.insert = llsInsert;       // insert node at end of list
	this.traverse = llsTraverse;   // return list elements in an array
	this.isEmpty = llsEmpty;       // true if list is empty
	this.deleteFirst = deleteFirst;

	// --------------------
	// student methods next;actual functions in student code section at end

}

// -----------------------------------------------------------------------
// functions used by methods of List() object
//

function llsEmpty()
{
	return (this.first == null);
}

// --------------------
function llsInsert(item)
{
	// if list empty create node and link, otherwise walk down list and insert at end

	if (this.isEmpty())
		this.first = new LNode(item);
	else
	{
		var l = this.first;      // walker variable
		while (l.next != null)
			l = l.next;
		l.next = new LNode(item);
	}
}

// --------------------
function llsTraverse()
{
	var out = [];

	for (var i=0, l=this.first; l != null; l = l.next )
		out [i++] = l.item;
	return out;
}



// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// --- begin student code section ----------------------------------------

function deleteFirst()
{
	var item = this.first.item;

	this.first = this.first.next;

	return item;
}