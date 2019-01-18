describe('Bubble Sort', function(){

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

     it('handles a single item', function(){
        let unsorted = [1],
            sorted = bubbleSort(unsorted);
    
    expect(sorted[0]).toEqual(1);
    expect (sorted.length).toEqual(1);
     });

     it('handles multiple items', function(){
        let unsorted = [8, 7, 6],
            sorted = bubbleSort(unsorted);
    
    expect(sorted[0]).toEqual(6);
    expect (sorted.length).toEqual(3);
     });


    expect(swapCounter).toEqual(100);
  });