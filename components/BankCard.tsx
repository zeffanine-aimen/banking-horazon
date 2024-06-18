const BankCard: React.FC<CreditCardProps> = ({ account, userName, showBalance = true }) => {
    return (
        <div className="w-72 h-44 rounded-xl bg-gradient-to-r from-gray-800 to-purple-500 p-5 text-white shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">{account.name}</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 1a1 1 0 000 2h8a1 1 0 100-2H6zm-1 4a1 1 0 000 2h10a1 1 0 100-2H5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full">
                <span className="text-sm">{userName}</span>
                {showBalance && <span className="text-xl font-bold">${account.availableBalance}</span>}
            </div>
        </div>
    );
};

export default BankCard;