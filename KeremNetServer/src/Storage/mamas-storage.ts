import { v4 } from "uuid";


export class InMemoryStorage {
  private storage: { [collectionName: string]: any[] };

  constructor() {
    this.storage = {};
  }
  create(collectionName:string, item:Object) {
    if (!this.storage[collectionName]) {
      this.storage[collectionName] = [];
    }
    
    const newUser = {
      id: v4(),
      ...item,
    };
    this.storage[collectionName].push(newUser);
    return newUser;
  }

  find(collectionName:string, findFunc:any) {
    if (!this.storage[collectionName]) {
      return [];
    }
    return this.storage[collectionName].filter(findFunc);
  }

  where(collectionName:string, where:any) {
    if (!this.storage[collectionName]) {
      return [];
    }
    return this.find(collectionName, (item: any) => {
      return Object.keys(where).every((key) => item[key] == where[key]);
    });
  }

  remove(collectionName:string, findFunc:any) {
    if (!this.storage[collectionName]) {
      return [];
    }
    const items = this.find(collectionName, findFunc);
    this.storage[collectionName] = this.storage[collectionName].filter(
      (item) => !items.includes(item)
    );
    return items;
  }
}

export class InMemorySharedStorage {
  static storage = {};
  private storage: { [collectionName: string]: any[] };
  constructor() {
    this.storage = InMemorySharedStorage.storage;
  }
  create(collectionName:string, item:any) {
    if (!this.storage[collectionName]) {
      this.storage[collectionName] = [];
    }
    const newUser = {
      id: v4(),
      ...item,
    };
    this.storage[collectionName].push(newUser);
    return newUser;
  }

  find(collectionName:string, findFunc:any) {
    if (!this.storage[collectionName]) {
      return [];
    }
    return this.storage[collectionName].filter(findFunc);
  }
  where(collectionName:string, where:any) {
    if (!this.storage[collectionName]) {
      return [];
    }
    return this.find(collectionName, (item:any) => {
      return Object.keys(where).every((key) => item[key] === where[key]);
    });
  }

  remove(collectionName:string, findFunc:any) {
    if (!this.storage[collectionName]) {
      return [];
    }
    const items = this.find(collectionName, findFunc);
    this.storage[collectionName] = this.storage[collectionName].filter(
      (item) => !items.includes(item)
    );
    return items;
  }
}

