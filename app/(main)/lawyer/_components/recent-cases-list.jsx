"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Clock, CheckCircle2, XCircle } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function RecentCasesList({ cases = [] }) {
    return (
        <Card className="border-client/20 mt-6 hover:client/30 transition-all">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-client flex items-center">
                    <History className="h-6 w-6 mr-2 text-client" />
                    Past Cases
                </CardTitle>
            </CardHeader>
            <CardContent>
                {cases.length > 0 ? (
                    <div className="space-y-4">
                        {cases.map((legalCase) => (
                            <div
                                key={legalCase.id}
                                className="flex items-center justify-between p-4 border border-client/10 rounded-lg bg-card/50 hover:bg-card/80 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-2 rounded-full ${legalCase.status === "COMPLETED"
                                            ? "bg-client/20 text-client"
                                            : "bg-red-900/10 text-red-500"
                                        }`}>
                                        {legalCase.status === "COMPLETED" ? (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ) : (
                                            <XCircle className="h-5 w-5" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black dark:text-white">
                                            {legalCase.clientName || legalCase.client?.name || "Client"}
                                        </h4>
                                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {format(new Date(legalCase.startTime), "MMM d, h:mm a")}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <Badge
                                        variant="outline"
                                        className={
                                            legalCase.status === "COMPLETED"
                                                ? "border-client/30 text-client bg-client/5"
                                                : "border-red-500/30 text-red-500 bg-red-500/5"
                                        }
                                    >
                                        {legalCase.status}
                                    </Badge>
                                    {legalCase.videoSessionId && legalCase.status === "COMPLETED" && (
                                        <div className="text-xs text-muted-foreground mt-1">
                                            Video Consultation
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <History className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                        <h3 className="text-lg font-medium text-muted-foreground">
                            No recent history
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Completed and cancelled cases will appear here.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
