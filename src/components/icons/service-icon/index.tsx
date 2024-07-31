import React from "react";
import { IconProps } from "@/src/types";

const ServiceIcon = ({ size = "25", color = "#b1b1b1" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_78_355)">
        <path
          d="M24.7853 1.25045L23.7496 0.214663C23.5336 -0.00135204 23.2064 -0.0605316 22.9287 0.0654447L17.3655 2.52135C17.1465 2.62096 16.9907 2.8213 16.9478 3.05743C16.9052 3.2942 16.9806 3.53638 17.1505 3.70636L21.2937 7.84946C21.4636 8.01943 21.7058 8.09477 21.9426 8.05224C22.1787 8.00933 22.3791 7.85351 22.4787 7.63452L24.9345 2.07125C25.0605 1.79357 25.0013 1.46637 24.7853 1.25045Z"
          fill={color}
        />
        <path
          d="M4.73145 16.1255L0.642589 20.2143C-0.214196 21.0711 -0.214196 22.4649 0.642589 23.3217L1.67833 24.3574C2.53512 25.2142 3.92891 25.2142 4.78565 24.3574L8.87451 20.2685L4.73145 16.1255ZM4.27496 21.7711C3.98868 22.0574 3.52535 22.0574 3.23912 21.7711C2.95294 21.4848 2.95294 21.0215 3.23912 20.7353L5.25645 18.718C5.54273 18.4317 6.00601 18.4317 6.29219 18.718C6.57847 19.0043 6.57847 19.4675 6.29219 19.7538L4.27496 21.7711Z"
          fill={color}
        />
        <path
          d="M11.9818 17.1612L7.83874 13.0181C7.2677 12.4471 6.33821 12.4471 5.76721 13.0181C5.19617 13.5892 5.19617 14.5187 5.76721 15.0897L9.91032 19.2328C10.4813 19.8038 11.4108 19.8038 11.9818 19.2328C12.5529 18.6619 12.5529 17.7323 11.9818 17.1612Z"
          fill={color}
        />
        <path
          d="M19.2222 7.84941L17.1506 5.77783L11.464 11.4644C10.8919 10.8924 9.96455 10.8924 9.39243 11.4644L8.87451 11.9824L13.0176 16.1255L13.5355 15.6075C14.1076 15.0354 14.1076 14.1081 13.5355 13.536L19.2222 7.84941Z"
          fill={color}
        />
        <path
          d="M23.7147 17.4979C22.5257 16.3089 21.0959 16.0532 19.4554 16.3464L16.1256 13.017L15.3305 13.8121C15.5923 14.796 15.3378 15.8762 14.5709 16.6431L14.054 17.1599L16.3456 19.4513C16.1145 20.7442 16.1362 21.8409 16.9392 23.0303C17.8659 24.4034 19.4877 25.1839 21.1868 24.95C21.4677 24.9114 21.7023 24.7166 21.7926 24.4478C21.8829 24.1791 21.8133 23.8823 21.6128 23.6818L20.6056 22.6763V20.605H22.679L23.6807 21.6067C23.8816 21.8076 24.1791 21.8767 24.4481 21.7857C24.7171 21.6947 24.9113 21.459 24.9491 21.1774C25.128 19.8452 24.6921 18.4749 23.7147 17.4979Z"
          fill={color}
        />
        <path
          d="M8.64425 5.53236C8.93492 3.90898 8.69957 2.48085 7.49273 1.27314C6.67159 0.45205 5.57296 0 4.39923 0C4.20163 0 4.00612 0.0128906 3.81315 0.0384277C3.53136 0.0758299 3.29548 0.270263 3.20436 0.53955C3.11325 0.808739 3.18283 1.10639 3.38381 1.30737L4.39533 2.30883V4.39447H2.31364L1.30964 3.37641C1.1091 3.17587 0.812082 3.10649 0.543235 3.19697C0.274485 3.28745 0.0801008 3.52231 0.0414778 3.80331C-0.181666 5.42816 0.522385 7.07889 1.95886 8.04862C3.1528 8.85301 4.25602 8.87293 5.53932 8.64159L7.84015 10.9462L8.35719 10.4291C9.12408 9.66224 10.2042 9.40779 11.1881 9.66951L11.9829 8.87469L8.64425 5.53236Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_78_355">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ServiceIcon;