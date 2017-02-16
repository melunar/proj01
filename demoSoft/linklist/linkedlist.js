/**
 * [链表类]
 */
function LinkedList() {
    /**
     * 链表的节点、元素
     * @param {[Node]} element [节点]
     */
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };
    //初始化长度 0
    let length = 0;
    //第一个元素
    let head = null;
    /**
     * 向链表结尾添加一个元素
     * @param  {[Node]} element [description]
     * @return {[type]}        [description]
     */
    this.append = function(element) {
        let node = new Node(element),
            current;
        if (head === null) {
            // 空链表
            head = node;
        } else {
            //从第一个开始遍历 到结尾添加即可
            current = node;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    /**
     * 向链表特定位置插入元素
     * @param  {[number]} position [description]
     * @param  {[Node]} element   [description]
     * @return {[type]}          [description]
     */
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                //如果在最前面插入
                node.next = current;
                head = node;
            } else {
                // 在非零位置插入
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            //位置不满足要求
            return false;
        }
    };
    /**
     * 删除链表中指定一项
     * @param  {[number]} position [description]
     * @return {[type]}          [description]
     */
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0,
                removeElement;
            if (position === 0) {
                //删除第一项 head
                head = current.next;
            } else {
                //遍历寻找位置 删除之
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    /**
     * 获取指定元素位置索引
     * @param  {[Node]} element [description]
     * @return {[type]}         [description]
     */
    this.indexOf = function(element) {
        let current = head,
            index = 0;
        //循环链表找到元素索引
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        // 没有该元素
        return -1;
    };
    /**
     * 删除链表摸一个元素
     * @param  {[type]} element [description]
     * @return {[type]}         [description]
     */
    this.remove = function(element) {
            // 获取元素所有
            let index = this.indexOf(element);
            // 删除指定索引元素
            return this.removeAt(index);
        }
        /**
         * 判断链表是否为空
         * @return {Boolean} [description]
         */
    this.isEmpty = function() {
        return length === 0;
    };
    /**
     * 获取链表长度
     * @return {[type]} [description]
     */
    this.size = function() {
        return length;
    };
    /**
     * 获取链表长度
     * @return {[type]} [description]
     */
    this.getHead = function() {
        return head;
    };
    /**
     * toSting
     * @return {[type]} [description]
     */
    this.toString = function() {
        let current = head,
            LinkedListString = "";
        while (current) {
            //拼接字符串
            LinkedListString += current.element.toString() + (current.next ? "," : "");
            current = current.next;
        }
        return LinkedListString;
    };

    /**
     * 控制台打印链表
     * @return {[type]} [description]
     */
    this.print = function() {
    	console.log(this.toString());
    }
}

var ll = new LinkedList();
var Node = function(num, str) {
	this.num = num;
	this.str = str;
	this.toString = function() {
		return "node{num: " + this.num + " str: " + this.str + "}"
	}
};

ll.insert(0, new Node(0, "a"));

ll.insert(1, new Node(1, "b"));

ll.insert(2, new Node(2, "c"));

ll.print();