export default class Store{
  constructor(){
    this.subscribers = [];
    this.things = [];
    this.people = [
      { id: 1, name: 'Moe'},
      { id: 2, name: 'Larry'},
    ];
  }
  load(){
    this.broadcast({ things: this.things, people: this.people });
  }
  subscribe(subscriber){
    this.subscribers.push(subscriber);
  }
  broadcast(payload){
    this.subscribers.forEach( (subscriber) => subscriber(payload) );
  }
  destroyThing(id){
    this.things = this.things.filter( thing => thing.id !== id );
    this.broadcast({ things: this.things });
  }
  createThing(name){
    let maxId = this.things.reduce( (max, thing)=> {
      if(thing.id > max)
        max = thing.id;
      return max;
    }, 0);
    this.things.push({ name: name, id: ++maxId });
    this.broadcast({ things: this.things });
  }
};
