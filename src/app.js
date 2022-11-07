
document.addEventListener('alpine:init' ,()=>{
    //stores variable globally
Alpine.store('sidebar', {
    
    full:false,
    active: 'home',
    navOpen:false,
});
})  




// Creating Component Dropdown

Alpine.data('dropdown',()=>({
    open:false,
    toggle(){
        this.open = !this.open;

    },
    activeClass: 'bg-gray-800 text-gray-200',
    expandedClass: 'border-l border-gray-400 ml-4 pl-4',
    shrinkedClass: 'sm:absolute top-0 left-0 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0'
}))