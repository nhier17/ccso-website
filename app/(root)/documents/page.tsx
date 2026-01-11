import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileText,
  Download,
  Calendar,
  FileCheck,
  Lock,
  Eye,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { documentCategories } from "@/constants";

const Documents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4"> 
      <section className="section-padding">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8">
              <TabsList className="flex flex-wrap h-auto p-1 bg-gray-100 rounded-xl">
                <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-white">
                  All Documents
                </TabsTrigger>
                {documentCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="flex-1 data-[state=active]:bg-white">
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              {documentCategories.map(category => (
                  <div key={category.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${category.color.split(' ')[0]}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.documents.map((doc, index) => (
                        <DocumentCard key={index} doc={doc} category={category.title} />
                      ))}
                    </div>
                  </div>
                ))}
            </TabsContent>

            {documentCategories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-2xl border">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${category.color} mb-4`}>
                          <category.icon className="h-5 w-5" />
                          <span className="font-semibold">{category.title}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">{category.title} Documents</h2>
                        <p className="text-gray-600 max-w-3xl">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.documents.map((doc, index) => (
                      <DocumentCard key={index} doc={doc} category={category.title} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
      </section>

      <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Lock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Document Security & Verification</h3>
                    <p className="text-gray-700 mb-4">
                      All documents on this page are official and verified. For certified copies or additional verification, 
                      please contact our administration office. Some sensitive documents may require formal request procedures.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="outline" className="border-blue-300 text-blue-700">
                        <FileCheck className="h-3 w-3 mr-1" />
                        Officially Verified
                      </Badge>
                      <Badge variant="outline" className="border-green-300 text-green-700">
                        <Calendar className="h-3 w-3 mr-1" />
                        Regularly Updated
                      </Badge>
                      <Badge variant="outline" className="border-amber-300 text-amber-700">
                        <Eye className="h-3 w-3 mr-1" />
                        Publicly Accessible
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </section>
    </div>
  );
};

// Document Card Component
const DocumentCard = ({ doc, category }: any) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border">
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="outline" className="text-xs">
          {doc.year}
        </Badge>
        <Badge className="text-xs bg-gray-100 text-gray-700">
          {doc.type}
        </Badge>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-5 w-5 text-primary flex-shrink-0" />
          <h4 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {doc.title}
          </h4>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{doc.description}</p>
        {category && (
          <span className="inline-block text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
            {category}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm text-gray-500">{doc.size}</span>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={doc.downloadUrl} download>
              <Download className="h-4 w-4 mr-1" />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);


export default Documents;