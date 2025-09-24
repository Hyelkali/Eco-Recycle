import { Home, Truck, RotateCcw, Wallet, User } from "lucide-react"

export function BottomNavigation() {
  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center space-y-1">
          <Home className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600">Home</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <Truck className="w-5 h-5 text-green-500" />
          <span className="text-xs text-green-500">Delivery</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
           <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 0.369141C15.2887 0.36915 16.8817 1.20873 17.9053 2.51562C19.553 2.31535 21.2733 2.84759 22.5381 4.1123C23.8028 5.37703 24.335 7.09734 24.1348 8.74512C25.4416 9.76869 26.2812 11.3617 26.2812 13.1504C26.2812 14.9392 25.4408 16.5321 24.1338 17.5557C24.3341 19.2034 23.8019 20.9237 22.5371 22.1885C21.2724 23.4529 19.5528 23.9853 17.9053 23.7852C16.8817 25.092 15.2887 25.9316 13.5 25.9316C11.7112 25.9316 10.1183 25.0912 9.09473 23.7842C7.44688 23.9846 5.72669 23.4523 4.46191 22.1875C3.19747 20.9229 2.66503 19.2033 2.86523 17.5557C1.55833 16.5321 0.718759 14.9391 0.71875 13.1504C0.71875 11.3617 1.55833 9.76867 2.86523 8.74512C2.66498 7.09731 3.19718 5.37705 4.46191 4.1123C5.72666 2.84756 7.44693 2.31538 9.09473 2.51562C10.1183 1.20872 11.7113 0.369141 13.5 0.369141ZM11.9023 14.0859L9.03809 11.2217L6.77832 13.4814L11.9023 18.6055L20.2217 10.2861L17.9619 8.02637L11.9023 14.0859Z" fill="black"/>
          </svg>


          </div>
          <span className="text-xs text-gray-600">Booked</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <Wallet className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600">Wallet</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <User className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600">Profile</span>
        </div>
      </div>
    </div>
  )
}
