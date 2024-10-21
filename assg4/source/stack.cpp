#include<iostream>
using namespace std;

const int MAX = 50;

class Stack {
    int p;
    public:
        int a[MAX];
        Stack() { p = -1;}
        void push(int value);
        int pop();
        void top();
        void print_stack();
};

void Stack::push(int value) {
    if (p >= (MAX - 1)) {
        cout<<"Stack Overflow"<<endl;
    } else {
        a[++p] = value;
        cout<<"Pushed "<<value<<" into stack"<<endl;
    }
}

int Stack::pop() {
    if (p < 0) {
        cout<<"Stack Underflow"<<endl;
        return 0;
    }
    return a[p--];
}

void Stack::top() {
	if (p < 0) cout<<"Empty Stack"<<endl;
	else cout<<"Element on top: "<<a[p]<<endl;
}

void Stack::print_stack() {
    if (p < 0) cout<<"Empty Stack"<<endl;
    else {
        cout<<"Printing stack from top"<<endl;
        int temp = p;
	cout<<"[ ";
        while (temp >= 0) {
            cout<<a[temp--]<<" ";
        }
	cout<<"]"<<endl;
    }
}

int main() {
    Stack s;
    cout<<"Performing display before push()"<<endl;
    s.print_stack();
    cout<<"Pushing 10, 20 and 30 into stack"<<endl;
    s.push(10);
    s.push(20);
    s.push(30);
    s.print_stack();
    cout<<"Performing pop() operation"<<endl;
    cout<<s.pop()<<" Popped"<<endl;
    cout<<"Peeking stack"<<endl;
    s.top();
    s.print_stack();
}
