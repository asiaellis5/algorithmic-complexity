describe("Timer", function () {
  let timer;

  beforeEach(function () {
    timer = new Timer(sort)
  })

  describe("time", function () {
    it("times the amount of time taken and pushes it into an array", function () {
      timer.time(1, 10)
      expect(timer.times.length).toEqual(10)
    })
  })
})