// event Emmit 
function Handler() {
    const arg = [...arguments]
    const namespace;
  }

  function listen(type, handler) {
    const typeInfo = this.getTypeInfo(type);
    const eventHandlers = this.events.get(typeInfo.type) || [];

    if (!this.hasEventType(typeInfo.type)) {
      throw new Error(`There is no event type ${typeInfo.type}`);
    }

    if (typeInfo.namespace) {
      handler.namespace = typeInfo.namespace;
    }

    eventHandlers.push(handler);

    this.events.set(typeInfo.type, eventHandlers);
  }

function Emitter() {
    return {listen(type, handler)
    emit(type, ...args)
    emitReduce(type, source, ...args)
    addEventType(type)
    removeEventHandler(type, handler)
    getEvents()
    holdEventInvoke(fn)}
}
  
  // emmiterConstructor는 emitter를 생성해주는 interface인것같은데...
  // 필요없음?
//   export class EmitterConstructor {
//     new (): Emitter;
//   }

function  HookCallback(url, text=null){
    
}
  export function HookMap() {
    return function addImageBlobHook (blob ,  hookCallback){}
  };
// image

export function addDefaultImageBlobHook(eventEmitter: Emitter) {
    eventEmitter.listen('addImageBlobHook', (blob: File, callback: HookCallback) => {
      const reader = new FileReader();
  
      reader.onload = ({ target }) => callback(target!.result as string);
      reader.readAsDataURL(blob);
    });
  }


export function emitImageBlobHook(eventEmitter: Emitter, blob: File, type: string) {
    const hook: HookCallback = (imageUrl, altText) => {
      eventEmitter.emit('command', 'addImage', {
        imageUrl,
        altText: altText || blob.name || 'image',
      });
    };
  
    eventEmitter.emit('addImageBlobHook', blob, hook, type);
  }
  
  export function pasteImageOnly(items: DataTransferItemList) {
    const images = toArray(items).filter(({ type }) => type.indexOf('image') !== -1);
  
    if (images.length === 1) {
      const [item] = images;
  
      if (item) {
        return item.getAsFile();
      }
    }
  
    return null;
  }
  