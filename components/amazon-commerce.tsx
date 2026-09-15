import Image from "next/image";

export default function AmazonCommerce() {
  return (
    <div className="amazon-commerce">
      <svg className="amazon-illustration" viewBox="0 0 260 230" fill="none" role="img" aria-label="Ecommerce illustration with a mobile storefront, delivery package and shopping cart">
        <circle cx="132" cy="114" r="94" fill="#FFE9C7" />
        <ellipse cx="130" cy="209" rx="103" ry="10" fill="#EBCB9C" opacity=".5" />
        <g transform="rotate(8 177 95)">
          <rect x="140" y="22" width="72" height="139" rx="12" fill="#142239" />
          <rect x="146" y="32" width="60" height="118" rx="6" fill="#fff" />
          <rect x="164" y="26" width="25" height="3" rx="1.5" fill="#6A7B91" />
          <path d="M146 51h60v15h-60z" fill="#FFAD38" />
          <path d="M146 51h10v18a5 5 0 0 1-10 0V51ZM166 51h10v18a5 5 0 0 1-10 0V51ZM186 51h10v18a5 5 0 0 1-10 0V51Z" fill="#FFF2DB" />
          <rect x="155" y="82" width="20" height="23" rx="3" fill="#DCE6FA" />
          <rect x="180" y="82" width="17" height="3" rx="1.5" fill="#637590" />
          <rect x="180" y="90" width="13" height="3" rx="1.5" fill="#D3DCE8" />
          <rect x="155" y="115" width="42" height="17" rx="8.5" fill="#FFAC32" />
          <path d="M172 122h9m-4-3 4 3-4 3" stroke="#142239" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="commerce-package">
          <path d="m45 103 64-29 61 31-62 32-63-34Z" fill="#F4B75D" />
          <path d="M45 103v72l63 33v-71l-63-34Z" fill="#D99843" />
          <path d="m108 137 62-32v70l-62 33v-71Z" fill="#EAAF57" />
          <path d="m70 92 65 32 13-7-65-31-13 6Z" fill="#FFE3AD" />
          <path d="m135 124 13-7v23l-13 7v-23Z" fill="#FFE3AD" />
          <path d="M57 151c10 12 23 18 36 16" stroke="#263347" strokeWidth="4" strokeLinecap="round" />
          <path d="m87 163 8 3-3 8" stroke="#263347" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m119 157 34-17v20l-34 17v-20Z" fill="#FFF5E2" />
          <path d="m124 160 23-12m-23 17 16-8" stroke="#9A7445" strokeWidth="2" />
        </g>
        <g className="commerce-cart" stroke="#31567E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M179 151h10l8 35h35l8-26h-48" fill="#DCEAFF" />
          <path d="M201 161v17m12-17v17m12-17v17M198 170h38M197 186l-3 9h38" />
          <circle cx="200" cy="202" r="4" fill="#31567E" /><circle cx="228" cy="202" r="4" fill="#31567E" />
        </g>
        <circle cx="51" cy="55" r="17" fill="#fff" />
        <path d="m43 55 5 5 10-11" stroke="#4C855F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 115h13m-6-6v12M223 47h10m-5-5v10" stroke="#DDA04B" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <Image src="/marketplaces/amazon.png" width={600} height={230} alt="Amazon" className="amazon-scene-logo" />
    </div>
  );
}
