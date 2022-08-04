export default function Dropdown() {
    return (
        <div class="md:hidden">
            <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                class="text-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
                aria-label="Dropdown Menu"
            >
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    )
}
