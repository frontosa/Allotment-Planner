import React, { useState } from 'react';
import { Sprout, Sun, Tractor, ShoppingBasket, Info, CalendarDays, ChevronLeft, ChevronRight, Sparkles, ChefHat, ListChecks, Loader2 } from 'lucide-react';

// Comprehensive monthly data synthesizing UK gardening guides and Charles Dowding's timeline
const plannerData = {
  January: {
    sowIndoors: [{ name: "Chillies & Peppers", icon: "🌶️" }, { name: "Aubergines", icon: "🍆" }, { name: "Onions", icon: "🧅" }, { name: "Leeks (early)", icon: "🥬" }],
    sowOutdoors: [{ name: "Broad beans (mild areas)", icon: "🫘" }],
    plantOut: [{ name: "Garlic", icon: "🧄" }, { name: "Bare-root fruit trees", icon: "🌳" }],
    harvest: [{ name: "Parsnips", icon: "🥕" }, { name: "Leeks", icon: "🥬" }, { name: "Kale", icon: "🥬" }, { name: "Brussels Sprouts", icon: "🥦" }, { name: "Winter Cabbage", icon: "🥬" }],
    tip: "Plan your seed orders for the year. Keep off the soil if it's wet or frozen to protect its structure."
  },
  February: {
    sowIndoors: [{ name: "Tomatoes (late Feb)", icon: "🍅" }, { name: "Broad Beans", icon: "🫘" }, { name: "Early Peas", icon: "🟢" }, { name: "Spinach", icon: "🍃" }, { name: "Radish", icon: "🔴" }],
    sowOutdoors: [{ name: "Broad beans (under cloche)", icon: "🫘" }],
    plantOut: [{ name: "Fruit bushes", icon: "🫐" }],
    harvest: [{ name: "Kale", icon: "🥬" }, { name: "Brussels Sprouts", icon: "🥦" }, { name: "Leeks", icon: "🥬" }, { name: "Parsnips", icon: "🥕" }],
    tip: "Start 'chitting' early potatoes indoors in a cool, light place. Multisow module trays with early beetroot and onions."
  },
  March: {
    sowIndoors: [{ name: "Celery & Celeriac", icon: "🥬" }, { name: "Cucumbers", icon: "🥒" }, { name: "Lettuce & Salads", icon: "🥗" }, { name: "Tomatoes", icon: "🍅" }],
    sowOutdoors: [{ name: "Carrots (early)", icon: "🥕" }, { name: "Parsnips", icon: "🥕" }, { name: "Radish", icon: "🔴" }, { name: "Spinach", icon: "🍃" }, { name: "Peas", icon: "🟢" }],
    plantOut: [{ name: "Onion Sets", icon: "🧅" }, { name: "Early Potatoes", icon: "🥔" }, { name: "Broad Beans", icon: "🫘" }],
    harvest: [{ name: "Leeks", icon: "🥬" }, { name: "Kale", icon: "🥬" }, { name: "Overwintered Spring Onions", icon: "🧅" }],
    tip: "Warm the soil outdoors by covering beds with cloches or fleece a few weeks before sowing directly."
  },
  April: {
    sowIndoors: [{ name: "Courgettes & Squash", icon: "🥒" }, { name: "Pumpkins", icon: "🎃" }, { name: "Sweetcorn", icon: "🌽" }, { name: "Runner & French Beans", icon: "🫘" }],
    sowOutdoors: [{ name: "Carrots", icon: "🥕" }, { name: "Beetroot", icon: "🟣" }, { name: "Peas", icon: "🟢" }, { name: "Lettuce & Chard", icon: "🥬" }],
    plantOut: [{ name: "Maincrop Potatoes", icon: "🥔" }, { name: "Peas (module raised)", icon: "🟢" }, { name: "Cabbages", icon: "🥬" }],
    harvest: [{ name: "Asparagus", icon: "🎋" }, { name: "Radish", icon: "🔴" }, { name: "Spring Cabbage", icon: "🥬" }, { name: "Rhubarb", icon: "🥧" }],
    tip: "Keep an eye on the weather forecast. Be prepared to protect early outdoor sowings from late frosts with horticultural fleece."
  },
  May: {
    sowIndoors: [{ name: "Melons", icon: "🍈" }, { name: "Succession Salads", icon: "🥗" }],
    sowOutdoors: [{ name: "Runner & French Beans", icon: "🫘" }, { name: "Sweetcorn", icon: "🌽" }, { name: "Carrots & Beetroot", icon: "🥕" }, { name: "Courgettes (late May)", icon: "🥒" }],
    plantOut: [{ name: "Tomatoes (Greenhouse)", icon: "🍅" }, { name: "Peppers & Aubergines", icon: "🌶️" }, { name: "Sweetcorn", icon: "🌽" }, { name: "Courgettes & Squash", icon: "🥒" }],
    harvest: [{ name: "Asparagus", icon: "🎋" }, { name: "Early Salads", icon: "🥗" }, { name: "Radish", icon: "🔴" }, { name: "Spinach", icon: "🍃" }],
    tip: "Wait until the last frost has completely passed before planting out tender crops like tomatoes, courgettes, and beans."
  },
  June: {
    sowIndoors: [{ name: "Winter Cabbage", icon: "🥬" }, { name: "Kale", icon: "🥬" }],
    sowOutdoors: [{ name: "Succession Carrots", icon: "🥕" }, { name: "Beetroot", icon: "🟣" }, { name: "Salads & Radish", icon: "🥗" }, { name: "Florence Fennel", icon: "🌿" }],
    plantOut: [{ name: "Outdoor Tomatoes", icon: "🍅" }, { name: "Pumpkins & Squash", icon: "🎃" }, { name: "Leeks", icon: "🥬" }, { name: "Winter Brassicas", icon: "🥦" }],
    harvest: [{ name: "Early Potatoes", icon: "🥔" }, { name: "Broad Beans & Peas", icon: "🟢" }, { name: "Garlic (late June)", icon: "🧄" }, { name: "Strawberries", icon: "🍓" }],
    tip: "Harvest garlic when the lower leaves start to turn yellow and dry. Water deeply but infrequently during dry spells."
  },
  July: {
    sowIndoors: [{ name: "Spring Cabbage", icon: "🥬" }],
    sowOutdoors: [{ name: "Turnips", icon: "⚪" }, { name: "Winter Radishes", icon: "🔴" }, { name: "Chicory & Endive", icon: "🥬" }, { name: "Lettuce", icon: "🥗" }],
    plantOut: [{ name: "Winter Brassicas", icon: "🥬" }, { name: "Leeks", icon: "🥬" }],
    harvest: [{ name: "Maincrop Potatoes", icon: "🥔" }, { name: "Onions & Garlic", icon: "🧅" }, { name: "Courgettes & Beans", icon: "🥒" }, { name: "Tomatoes", icon: "🍅" }],
    tip: "Keep newly planted brassicas netted against cabbage white butterflies. Feed tomatoes with a high-potash liquid feed."
  },
  August: {
    sowIndoors: [{ name: "Winter Salads", icon: "🥗" }],
    sowOutdoors: [{ name: "Winter Salads", icon: "🍃" }, { name: "Spinach", icon: "🍃" }, { name: "Spring Onions", icon: "🧅" }, { name: "Turnips", icon: "⚪" }],
    plantOut: [{ name: "Spring Cabbage", icon: "🥬" }],
    harvest: [{ name: "Tomatoes & Cucumbers", icon: "🍅" }, { name: "Courgettes", icon: "🥒" }, { name: "Sweetcorn", icon: "🌽" }, { name: "Aubergines & Peppers", icon: "🍆" }],
    tip: "Harvest courgettes and runner beans constantly. The more you pick, the more they produce! Dry onions in the sun."
  },
  September: {
    sowIndoors: [{ name: "Overwintering Salads", icon: "🥗" }],
    sowOutdoors: [{ name: "Overwintering Onions", icon: "🧅" }, { name: "Spinach", icon: "🍃" }, { name: "Winter Radish", icon: "🔴" }],
    plantOut: [{ name: "Spring Cabbage", icon: "🥬" }, { name: "Strawberry runners", icon: "🍓" }],
    harvest: [{ name: "Pumpkins & Squash", icon: "🎃" }, { name: "Maincrop Potatoes", icon: "🥔" }, { name: "Apples & Pears", icon: "🍏" }, { name: "Sweetcorn & Beans", icon: "🌽" }],
    tip: "Leave pumpkins and squash on the vine to cure in the sun before storing to harden their skins."
  },
  October: {
    sowIndoors: [{ name: "Broad Beans (late Oct)", icon: "🫘" }],
    sowOutdoors: [{ name: "Broad Beans", icon: "🫘" }, { name: "Peas (hardy varieties)", icon: "🟢" }, { name: "Garlic", icon: "🧄" }],
    plantOut: [{ name: "Garlic Cloves", icon: "🧄" }, { name: "Autumn Onion Sets", icon: "🧅" }],
    harvest: [{ name: "Pumpkins & Squash", icon: "🎃" }, { name: "Apples", icon: "🍏" }, { name: "Root Crops", icon: "🥕" }, { name: "Leeks & Kale", icon: "🥬" }],
    tip: "Clear finished crops and mulch beds with a thick layer of compost (No Dig method) to prepare soil for next spring."
  },
  November: {
    sowIndoors: [{ name: "Microgreens", icon: "🌱" }],
    sowOutdoors: [{ name: "Garlic", icon: "🧄" }, { name: "Broad Beans", icon: "🫘" }],
    plantOut: [{ name: "Bare-root fruit bushes", icon: "🫐" }, { name: "Tulips", icon: "🌷" }],
    harvest: [{ name: "Parsnips", icon: "🥕" }, { name: "Leeks", icon: "🥬" }, { name: "Kale", icon: "🥬" }, { name: "Winter Cabbage & Sprouts", icon: "🥦" }],
    tip: "Plant garlic cloves now; they need a period of cold weather to split into individual cloves and form bulbs."
  },
  December: {
    sowIndoors: [{ name: "Microgreens", icon: "🌱" }],
    sowOutdoors: [{ name: "None - rest the soil!", icon: "❄️" }],
    plantOut: [{ name: "Bare-root fruit trees", icon: "🌳" }],
    harvest: [{ name: "Parsnips", icon: "🥕" }, { name: "Leeks", icon: "🥬" }, { name: "Brussels Sprouts", icon: "🥦" }, { name: "Winter Cabbage", icon: "🥬" }],
    tip: "Harvest parsnips after the first frost, as the cold converts their starches to sugars, giving a sweeter flavour."
  }
};

const months = Object.keys(plannerData);

export default function App() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [aiError, setAiError] = useState(null);

  const currentMonth = months[currentMonthIndex];
  const data = plannerData[currentMonth];

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
    setAiResponse(null);
    setAiError(null);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
    setAiResponse(null);
    setAiError(null);
  };

  // --- Gemini API Integration ---
  const callGemini = async (prompt, systemPrompt) => {
    setAiLoading(true);
    setAiResponse(null);
    setAiError(null);

    const apiKey = ""; // Filled by environment
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const fetchWithRetry = async (retries = 5, delay = 1000) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        
        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (text) {
          setAiResponse(text);
        } else {
          throw new Error("No response generated.");
        }
      } catch (error) {
        if (retries > 0) {
          await new Promise(res => setTimeout(res, delay));
          return fetchWithRetry(retries - 1, delay * 2);
        } else {
          setAiError("Sorry, the AI gardener is currently resting in the shed. Please try again later!");
          console.error("Gemini API Error:", error);
        }
      } finally {
        if (retries === 0 || aiResponse) { // Only stop loading if we're done
            setAiLoading(false);
        }
      }
    };

    await fetchWithRetry();
    setAiLoading(false);
  };

  const handleGenerateRecipe = () => {
    const harvestItems = data.harvest.map(item => item.name).join(", ");
    if (!harvestItems) {
      setAiResponse("It looks like there's nothing ready to harvest this month! Time to focus on sowing.");
      return;
    }
    
    const prompt = `I have just harvested the following from my UK allotment in ${currentMonth}: ${harvestItems}. 
    Please suggest a single, delicious, seasonal recipe using some or all of these ingredients. 
    Keep it concise. Include a catchy title, a short list of extra pantry ingredients needed, and 3-4 simple steps.`;
    
    const systemPrompt = "You are an enthusiastic farm-to-table chef who specializes in British allotment produce.";
    
    callGemini(prompt, systemPrompt);
  };

  const handleGenerateChores = () => {
    const indoors = data.sowIndoors.map(i => i.name).join(", ") || "Nothing";
    const outdoors = data.sowOutdoors.map(i => i.name).join(", ") || "Nothing";
    const plantingOut = data.plantOut.map(i => i.name).join(", ") || "Nothing";

    const prompt = `It is ${currentMonth} on my UK allotment. 
    Tasks for this month are:
    - Sow indoors: ${indoors}
    - Sow outdoors: ${outdoors}
    - Plant out: ${plantingOut}
    
    Create a prioritized, practical weekend to-do list for me based on these tasks. 
    Format it as a short checklist. Add one brief 'No Dig' gardening tip relevant to ${currentMonth} at the end.`;

    const systemPrompt = "You are a pragmatic, expert 'No Dig' gardener (like Charles Dowding) helping an allotment holder organize their weekend.";
    
    callGemini(prompt, systemPrompt);
  };

  // Helper to safely render simple markdown-like bolding
  const formatText = (text) => {
    return text.split('\n').map((line, i) => {
      if (!line.trim()) return <br key={i} className="h-2" />;
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="mb-2 text-gray-700 leading-relaxed">
          {parts.map((part, j) => 
            part.startsWith('**') && part.endsWith('**') 
              ? <strong key={j} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong> 
              : part.replace(/\*/g, '') // remove stray single asterisks
          )}
        </p>
      );
    });
  };

  // --- UI Components ---
  const ActionCard = ({ title, icon: Icon, items, colorClass, bgClass, borderClass }) => (
    <div className={`rounded-xl border-t-4 ${borderClass} ${bgClass} p-5 shadow-sm transition-all hover:shadow-md h-full flex flex-col`}>
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/40">
        <div className={`p-2 rounded-lg bg-white/60 text-${colorClass}-700 shadow-sm`}>
          <Icon size={22} className={`text-${colorClass}-600`} />
        </div>
        <h3 className={`font-bold text-lg text-${colorClass}-900`}>{title}</h3>
      </div>
      
      {items && items.length > 0 ? (
        <ul className="space-y-3 flex-grow">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 bg-white/50 p-2 rounded-lg">
              <span className="text-2xl" role="img" aria-label={item.name}>{item.icon}</span>
              <span className="font-medium text-gray-800 text-sm md:text-base leading-tight">{item.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex-grow flex items-center justify-center text-gray-500 italic p-4 bg-white/30 rounded-lg">
          Nothing to {title.toLowerCase()} this month.
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f6f4] font-sans text-gray-800 selection:bg-green-200 pb-12">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-emerald-600 text-white p-6 md:p-10 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <CalendarDays size={40} className="text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">Year-Round Sowing Planner</h1>
              <p className="text-green-100 font-medium mt-1">Your illustrated guide to plotting, planting & picking.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-8 -mt-6">
        {/* Month Navigation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Mobile Navigator */}
          <div className="flex items-center justify-between p-4 md:hidden bg-green-50">
            <button onClick={handlePrevMonth} className="p-2 bg-white rounded-full shadow-sm text-green-700 hover:bg-green-100 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold text-green-800">{currentMonth}</h2>
            <button onClick={handleNextMonth} className="p-2 bg-white rounded-full shadow-sm text-green-700 hover:bg-green-100 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Desktop Navigator */}
          <div className="hidden md:flex overflow-x-auto no-scrollbar border-b border-gray-100">
            {months.map((month, idx) => (
              <button
                key={month}
                onClick={() => setCurrentMonthIndex(idx)}
                className={`flex-1 min-w-[100px] py-4 px-2 text-center text-sm lg:text-base font-bold transition-all duration-300 relative ${
                  idx === currentMonthIndex 
                    ? 'text-green-700 bg-green-50 shadow-inner' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-green-600'
                }`}
              >
                {month}
                {idx === currentMonthIndex && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ActionCard title="Sow Indoors" icon={Sprout} items={data.sowIndoors} colorClass="orange" bgClass="bg-orange-50" borderClass="border-orange-400" />
              <ActionCard title="Sow Outdoors" icon={Sun} items={data.sowOutdoors} colorClass="green" bgClass="bg-green-50" borderClass="border-green-400" />
              <ActionCard title="Plant Out" icon={Tractor} items={data.plantOut} colorClass="blue" bgClass="bg-blue-50" borderClass="border-blue-400" />
              <ActionCard title="Harvest" icon={ShoppingBasket} items={data.harvest} colorClass="purple" bgClass="bg-purple-50" borderClass="border-purple-400" />
            </div>

            {/* Monthly Pro Tip */}
            <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl shadow-sm flex gap-4 items-start">
              <Info className="text-amber-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Gardener's Tip for {currentMonth}</h4>
                <p className="text-amber-800 leading-relaxed">{data.tip}</p>
              </div>
            </div>
          </div>

          {/* AI Assistant Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-indigo-600" size={24} />
              <h3 className="text-2xl font-bold text-indigo-900">AI Garden Assistant</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={handleGenerateRecipe}
                disabled={aiLoading}
                className="flex-1 bg-white hover:bg-purple-50 text-purple-700 font-semibold py-3 px-4 border border-purple-200 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChefHat size={20} />
                ✨ Recipe from {currentMonth}'s Harvest
              </button>
              
              <button 
                onClick={handleGenerateChores}
                disabled={aiLoading}
                className="flex-1 bg-white hover:bg-indigo-50 text-indigo-700 font-semibold py-3 px-4 border border-indigo-200 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ListChecks size={20} />
                ✨ {currentMonth} Weekend Chore List
              </button>
            </div>

            {/* AI Response Area */}
            {aiLoading && (
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-indigo-100 text-center flex flex-col items-center justify-center animate-pulse">
                <Loader2 className="animate-spin text-indigo-500 mb-3" size={32} />
                <p className="text-indigo-800 font-medium">Consulting the gardening almanac...</p>
              </div>
            )}

            {aiError && !aiLoading && (
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-red-800">
                <p>{aiError}</p>
              </div>
            )}

            {aiResponse && !aiLoading && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-indigo-100 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles size={64} />
                </div>
                <div className="relative z-10">
                  {formatText(aiResponse)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Legend / Key */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Sprout size={16} className="text-orange-500" />
            <span>Indoors/Under Glass</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun size={16} className="text-green-500" />
            <span>Direct Sow</span>
          </div>
          <div className="flex items-center gap-2">
            <Tractor size={16} className="text-blue-500" />
            <span>Move to final spot</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBasket size={16} className="text-purple-500" />
            <span>Ready to eat!</span>
          </div>
        </div>
      </main>
    </div>
  );
}