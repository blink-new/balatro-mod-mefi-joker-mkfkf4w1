import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Download, Star, Zap } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Mefi Joker Mod
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            A powerful Balatro mod for the Lovely framework
          </p>
          <div className="flex justify-center gap-2 mb-8">
            <Badge variant="secondary" className="bg-purple-600 text-white">
              <Star className="w-4 h-4 mr-1" />
              Rare Joker
            </Badge>
            <Badge variant="secondary" className="bg-blue-600 text-white">
              <Zap className="w-4 h-4 mr-1" />
              Scaling Multiplier
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Joker Info */}
          <Card className="bg-black/30 border-purple-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-2">
                🃏 Mefi Joker
              </CardTitle>
              <CardDescription className="text-gray-300">
                Grows stronger with every destroyed card
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-900/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Effect</h3>
                <p className="text-sm">
                  <span className="text-red-400 font-bold">X1.0 Mult</span> base<br/>
                  Gains <span className="text-red-400 font-bold">X0.5 Mult</span> for every destroyed card
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Rarity:</span>
                  <div className="text-purple-400 font-semibold">Rare ⭐⭐⭐</div>
                </div>
                <div>
                  <span className="text-gray-400">Cost:</span>
                  <div className="text-yellow-400 font-semibold">8 coins</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scaling Example */}
          <Card className="bg-black/30 border-blue-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-400">📈 Scaling Example</CardTitle>
              <CardDescription className="text-gray-300">
                See how Mefi grows throughout the game
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { cards: 0, mult: 1.0 },
                  { cards: 1, mult: 1.5 },
                  { cards: 5, mult: 3.0 },
                  { cards: 10, mult: 5.5 },
                  { cards: 20, mult: 10.5 }
                ].map((stage, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                    <span className="text-gray-300">{stage.cards} destroyed</span>
                    <span className="text-red-400 font-bold">X{stage.mult} Mult</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Installation */}
        <Card className="bg-black/30 border-green-500/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Installation
            </CardTitle>
            <CardDescription className="text-gray-300">
              Easy setup with Lovely mod loader
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-300 mb-2">Prerequisites</h3>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• Balatro (Steam version)</li>
                  <li>• Lovely mod loader installed</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Steps</h3>
                <ol className="text-sm space-y-1 text-gray-300 list-decimal list-inside">
                  <li>Download mod files from this repository</li>
                  <li>Extract to your Balatro mods directory</li>
                  <li>Launch Balatro with Lovely injector</li>
                  <li>Find Mefi in joker pools! 🎉</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          <p>Created for the Balatro modding community</p>
          <p className="mt-2">
            Enjoy scaling your multipliers with Mefi! 🃏✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default App