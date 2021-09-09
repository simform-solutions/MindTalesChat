import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MenuChat(props) {
  return (
    <Svg height={512} width={512} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        clipRule="evenodd"
        d="M236.735 269.37c-12.242-11.327-25.835-27.208-31.729-41.262-.906-1.812-2.717-6.351 0-9.975 5.441-7.257 6.347-7.71 12.234-14.514 4.083-4.992 7.253-9.522 5.895-13.608l-20.394-53.057c-1.819-3.632-7.253-4.085-13.601-4.538-5.442 0-11.328 0-15.412.906-9.064 3.179-27.646 27.669-29.911 45.354-4.989 38.542 29.911 89.787 64.811 121.533 34.907 32.2 88.843 62.588 126.912 53.964 17.676-4.078 40.349-24.482 42.16-34.013.906-4.077.453-9.968-.453-15.42-.452-6.343-1.812-10.874-5.449-12.687l-46.221-21.325c-4.091-2.266-8.166-.453-12.242 4.546-4.98 6.796-7.261 9.515-13.148 16.779-3.169 4.078-5.434 6.797-9.057 7.25-4.091.905-9.525-1.359-10.43-1.359-14.507-4.983-31.278-17.231-43.965-28.574zM84.441 432.181l26.288-66.665c-29.013-33.559-46.689-77.554-46.689-125.62 0-106.114 86.117-191.831 192.19-191.831 106.059 0 191.722 85.717 191.722 191.831 0 106.121-85.663 192.284-191.722 192.284-42.613 0-81.597-13.608-113.318-37.184l-58.471 37.185zm-32.183-65.306L16 512l129.628-58.962c33.089 17.232 70.706 27.216 110.602 27.216 132.338 0 239.77-107.489 239.77-240.357C496 107.481 388.568 0 256.23 0 123.417 0 16 107.481 16 239.896c0 46.707 13.593 90.249 36.258 126.979z"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default MenuChat;
