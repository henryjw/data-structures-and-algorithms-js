const { expect } = require('chai')

const Stack = require('../stack')

describe('Stack', () => {
    describe('.push()', () => {
        it('adds item to the top', () => {
            const stack = new Stack()
            stack.push(2)
            stack.push(1)

            expect(stack._items).to.deep.equal([2, 1])
        })
    })

    describe('.peek()', () => {
        it('returns the last item added', () => {
            const stack = new Stack()
            stack.push(3)
            stack.push(1)

            expect(stack.peek()).to.equal(1)
        })

        it('returns undefined if empty', () => {
            const stack = new Stack()
            
            expect(stack.peek()).to.be.undefined
        })
    })
    

    describe('.pop()', () => {
        it('returns item on top', () => {
            const stack = new Stack()
            stack.push(3)
            stack.push(2)

            const item = stack.pop()

            expect(item).to.equal(2)
        })

        it('removes item on top', () => {
            const stack = new Stack()
            stack.push(3)

            stack.pop()

            expect(stack._items).to.be.empty
        })

        it('returns undefined if popped when empty', () => {
            const stack = new Stack
            const item = stack.pop()

            expect(item).to.be.undefined
        })

        it('has length 0 if popped when empty', () => {
            const stack = new Stack
            stack.pop()

            expect(stack.length()).to.equal(0)
        })
    })

    describe('.clear()', () => {
        it('becomes empty after being called', () => {
            const stack = new Stack()
            stack.push(1)
            stack.clear()
            
            expect(stack.isEmpty()).to.be.true  
        })

        it('remains empty if already empty', () => {
            const stack = new Stack()
            stack.clear();

            expect(stack.isEmpty()).to.be.true
        })
    })

    describe('.isEmpty()', () => {
        it('returns true if empty', () => {
            const stack = new Stack()
            
            expect(stack.isEmpty()).to.be.true  
        })

        it('returns false if not empty', () => {
            const stack = new Stack()
            stack.push(1)

            expect(stack.isEmpty()).to.be.false
        })
    })
    

    describe('.length()', () => {
        it('returns the number of items in the stack', () => {
            const stack = new Stack()
            stack.push(1)
            stack.push(2)

            expect(stack.length()).to.equal(2)
        })
    })
})

